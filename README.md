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
-   [Example](https://github.com/droidxrx/example/tree/master/project/mal-api-v2/nodejs)
-   [Initial stepts before use the API](#initial-stepts-before-use-the-api)
-   [License](#license)

# Built With

The library is made to be as light as possible.

-   NodeJS
-   Axios

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

1. Get value from parameter `code`

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

2. Then when we have this `code`, we will need to create a session or a Access Token like this:

    ```javascript
    const { Oauth2 } = require("mal-api-v2");

    // Params clientSecret (optional)
    const oauth2 = new Oauth2(clientId, clientSecret);

    // Get token
    oauth2
    	.getToken(code, codeChallenge)
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
    	})
    	.catch((error) => {
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

3. If the session is expired, you are going to need to refresh:

    ```javascript
    const { Oauth2 } = require("mal-api-v2");

    // Params clientSecret (optional)
    const oauth2 = new Oauth2(clientId, clientSecret);

    // Get token
    oauth2
    	.refreshToken(accessToken)
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
    	})
    	.catch((error) => {
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

# LICENSE

[MIT](LICENSE)
