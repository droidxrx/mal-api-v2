const express = require('express')
const cors = require('cors')
const { join: pathJoin } = require('path')
const { writeFileSync, readFileSync } = require('jsonfile')
const { Oauth2, Anime, Manga, UserAnimeList, UserMangaList, User } = require('..')

const port = 8080
const homeUrl = `http://localhost:${port}`
const dataBase = pathJoin(__dirname, 'database.json')

const oAuth2Options = { clientId: 'YOUR_TOKEN', urlRedirect: `${homeUrl}/oauth2` }
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
