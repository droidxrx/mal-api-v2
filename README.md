# mal-api-v2

<a href="https://npmjs.org/package/mal-api-v2"><img src="https://img.shields.io/npm/v/mal-api-v2?style=flat-square" alt="Version" title="Version"></a> <a href="https://npmjs.org/package/mal-api-v2"><img src="https://img.shields.io/npm/l/mal-api-v2?style=flat-square" alt="License" title="License"></a> <a href="https://npmjs.org/package/mal-api-v2"><img src="https://img.shields.io/npm/dt/mal-api-v2?style=flat-square" alt="Total downloads" title="Total downloads"></a>

# Official documentation

This is the official documentation from MyAnimeList, if you need to verify any field.

[https://myanimelist.net/apiconfig/references/api/v2](https://myanimelist.net/apiconfig/references/api/v2)

# Table of Contents

-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Install](#install)
-   [Initial stepts before use the API](#initial-stepts-before-use-the-api)
-   [Documentation](docs/modules.md)
-   [Example](#example)
-   [License](#license)

# Built With

The library is made to be as light as possible.

-   `nodejs v14.17.6`
-   `superagent@6.1.0`
-   `query-string@7.0.1`

# Getting Started

## Prerequisites

1. You are going to need register your application first for the use of this API, so you can register here [https://myanimelist.net/apiconfig/create](https://myanimelist.net/apiconfig/create)
   You will get a result like this:
   <img src="https://cdn.jsdelivr.net/gh/droidxrx/DroidXrX@339866b/doc/ExampleFill.png">

2. Client_id and Client_Secret (if you need it) must not be disclosed.
3. App Redirect Url: In this field we must put the url to which it will be redirected after the user authorizes the use of his account in our application (can be localhost for test purpose)

## Install

```bash
npm install mal-api-v2
yarn add mal-api-v2
```

# Usage

## Initial stepts before use the API

<!-- prettier-ignore-start -->
1.  Get value from parameter `code`

    ```javascript
    const { Oauth2 } = require("mal-api-v2");

    // Params clientSecret (optional)
    const oauth2 = new Oauth2(clientId, clientSecret);

    // Save this to database or other
    const pkce = oauth2.pkceGenerate();
    // { code_challenge: string, code_verifier: string }

    // This generate the url that you need to redirect & params urlRedirect (optional)
    const urlToRedirect = oauth2.urlAuthorize(pkce.code_challenge, urlRedirect);

    //This example is for expressjs, but you only need to do a redirection to the url generated
    res.redirect(urlToRedirect);
    ```

    When the user authorize you, the user will be redirected again to the url that you filled at the information of the application, with a param "code", you are going to save this code in a database or something.

2.  Then when we have this `code`, we will need to create a session or a Access Token like this:

	```javascript
	const { Oauth2 } = require("mal-api-v2");

	// Params clientSecret (optional)
	const oauth2 = new Oauth2(clientId, clientSecret);

	// Get token
	oauth2.getToken(code, codeChallenge)
		.then((response) => {
			// Save response to database or other
			/*
				{
					"status": true,
					"return": {
						"token_type": "Bearer",
						"expires_in": number,
						"access_token": string,
						"refresh_token": string
					}
				}
			*/
		}).catch((error) => {
			/*
				{
					"status": false,
					"return": {
						"error": string,
						"message": string
					}
				}
			*/
		});
	```

3.  If the session is expired, you are going to need to refresh:

	```javascript
	const { Oauth2 } = require("mal-api-v2");

	// Params clientSecret (optional)
	const oauth2 = new Oauth2(clientId, clientSecret);

	// Get token
	oauth2.refreshToken(accessToken)
		.then((response) => {
			// Save response to database or other
			/*
				{
					"status": true,
					"return": {
						"token_type": "Bearer",
						"expires_in": number,
						"access_token": string,
						"refresh_token": string
					}
				}
			*/
		}).catch((error) => {
			/*
				{
					"status": false,
					"return": {
						"error": string,
						"message": string
					}
				}
			*/
		});
	```
# Example

```javascript
const express = require('express')
const cors = require('cors')
const { join: pathJoin } = require('path')
const { writeFileSync, readFileSync } = require('jsonfile')
const { Oauth2, Anime, Manga, UserAnimeList, UserMangaList, User } = require('mal-api-v2')

const port = 8080
const homeUrl = `http://localhost:${port}`
const dataBase = pathJoin(__dirname, 'database.json')

const oAuth2Options = { clientId: 'YOUR_CLIENT_ID', urlRedirect: `${homeUrl}/oauth2` }
const oauth2 = new Oauth2(oAuth2Options)
const codeChallenge = oauth2.pkceGenerate().code_challenge

const routerOauth2 = express.Router().get('/:path?', (req, res) => {
	const path = req.params.path
	const code = req.query.code
	const getOrRefreshToken = (data) => { writeFileSync(dataBase, data.return); res.json(data) }
	const refreshToken = () => readFileSync(dataBase).refresh_token

	const callBack = (callback) => callback.then(getOrRefreshToken).catch(error => res.status(400).json(error))

	if (!path && code && typeof code === 'string') callBack(oauth2.getToken(code, codeChallenge))
	else if (path === 'refresh-token') callBack(oauth2.refreshToken(refreshToken()))
	else if (path === 'authorize') res.redirect(oauth2.urlAuthorize(codeChallenge))
})

const routerSearch = express.Router().get('/:animeManga/:pathOrid?', (req, res) => {
	const { animeManga, pathOrid } = req.params
	const accessToken = readFileSync(dataBase).access_token
	const anime = new Anime(accessToken)
	const manga = new Manga(accessToken)

	const callBack = (callback) => callback.then(data => res.json(data)).catch(error => res.status(400).json(error))

	if (animeManga === 'anime') {
		const optionParams = { limit: 10, offset: 0, fields: ['id', 'genres', 'rank', 'rating'] }
		if (pathOrid && !isNaN(+pathOrid)) callBack(anime.id(+pathOrid, optionParams.fields))
		else if (pathOrid === 'ranking') callBack(anime.ranking({ ranking_type: 'all', ...optionParams }))
		else if (pathOrid === 'seasonal') callBack(anime.seasonal({ year: 2021, season: 'summer', ...optionParams }))
		else if (pathOrid === 'suggested') callBack(anime.suggested(optionParams))
		else callBack(anime.search({ q: 'Jojo', ...optionParams }))
	} else if (animeManga === 'manga') {
		const optionParams = { limit: 10, offset: 0, fields: ['id', 'genres', 'rank', 'mean'] }
		if (pathOrid && !isNaN(+pathOrid)) callBack(manga.id(+pathOrid, optionParams.fields))
		else if (pathOrid === 'ranking') callBack(manga.ranking({ ranking_type: 'all', ...optionParams }))
		else callBack(manga.search({ q: 'Jojo', ...optionParams }))
	}
})

const routerUserAnimeList = express.Router().get('/:path?/:id?', (req, res) => {
	const animeId = req.params.id
	const path = req.params.path
	const accessToken = readFileSync(dataBase).access_token
	const userAnimeList = new UserAnimeList(accessToken)

	const callBack = (callback) => callback.then(data => res.json(data)).catch(error => res.status(400).json(error))

	if (path === 'delete' && animeId && !isNaN(+animeId)) callBack(userAnimeList.deleteList(+animeId))
	else if (path === 'update' && animeId && !isNaN(+animeId)) callBack(userAnimeList.updateList(+animeId, { status: 'completed' }))
	else callBack(userAnimeList.getList())
})

const routerUserMangaList = express.Router().get('/:path?/:id?', (req, res) => {
	const mangaId = req.params.id
	const path = req.params.path
	const accessToken = readFileSync(dataBase).access_token
	const userMangaList = new UserMangaList(accessToken)

	const callBack = (callback) => callback.then(data => res.json(data)).catch(error => res.status(400).json(error))

	if (path === 'delete' && mangaId && !isNaN(+mangaId)) callBack(userMangaList.deleteList(+mangaId))
	else if (path === 'update' && mangaId && !isNaN(+mangaId)) callBack(userMangaList.updateList(+mangaId, { status: 'completed' }))
	else callBack(userMangaList.getList())
})

const routerUser = express.Router().get('/', (req, res) => {
	const accessToken = readFileSync(dataBase).access_token
	const user = new User(accessToken)
	user.get().then(data => res.json(data)).catch(error => res.status(400).json(error))
})

const app = express()
app.use(cors())

app.use('/oauth2', routerOauth2)
app.use('/search', routerSearch)
app.use('/user-anime-list', routerUserAnimeList)
app.use('/user-manga-list', routerUserMangaList)
app.use('/user', routerUser)

app.listen(port, () => console.log(`server has started on ${homeUrl} 🚀`))
```
<!-- prettier-ignore-end -->

# LICENSE

[MIT](LICENSE)
