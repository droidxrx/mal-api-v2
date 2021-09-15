# mal-api-v2

[![NPM Version][npm-image]][npm-url]
[![NPM License][license-image]][license-url]
[![NPM Downloads][downloads-image]][npm-url]

# Official documentation

This is the official documentation from MyAnimeList, if you need to verify any field.

[https://myanimelist.net/apiconfig/references/api/v2](https://myanimelist.net/apiconfig/references/api/v2)

# Table of Contents

-   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Install](#install)
-   [Usage](#usage)
-   List Class
    -   Oauth2
        -   pkceGenerate
        -   pkceVerifyChallenge
        -   urlAuthorize
        -   getToken
        -   refreshToken
    -   Anime
        -   id
        -   search
        -   ranking
        -   seasonal
        -   suggested
    -   Manga
        -   id
        -   search
        -   ranking
    -   UserAnimeList
        -   getList
        -   deleteList
        -   updateList
    -   UserMangaList
        -   getList
        -   deleteList
        -   updateList
    -   User
        -   get

# Built With

The library is made to be as light as possible.

-   NodeJS
-   Axios

# Getting Started

## Prerequisites

1. You are going to need register your application first for the use of this API, so you can register here [https://myanimelist.net/apiconfig/create](https://myanimelist.net/apiconfig/create)
   You will get a result like this:
   ![ExampleFill][examplefill]

2. Client_id and Client_Secret (if you need it) must not be disclosed.
3. App Redirect Url: In this field we must put the url to which it will be redirected after the user authorizes the use of his account in our application (can be localhost for test purpose)

## Install

```bash
npm install mal-api-v2
yarn add mal-api-v2
```

# Usage

[Example][example-url]

# LICENSE

[MIT][license-url]

[downloads-image]: https://img.shields.io/npm/dm/mal-api-v2.svg
[npm-image]: https://img.shields.io/npm/v/mal-api-v2.svg
[npm-url]: https://npmjs.org/package/mal-api-v2
[license-image]: https://img.shields.io/npm/l/mal-api-v2
[license-url]: LICENSE
[examplefill]: https://cdn.jsdelivr.net/gh/droidxrx/DroidXrX@339866b/doc/ExampleFill.png
[example-url]: https://github.com/droidxrx/example/tree/master/project/mal-api-v2/nodejs
