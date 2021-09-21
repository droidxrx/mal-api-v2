const { fetApi } = require('./utils/fetchs')
const { userAnime } = require('./utils/listFields')
const checkFields = require('./utils/checkFields')

class UserAnimeList {
	constructor (accessToken) {
		this.fetapi = (method, urlPath, obj) => fetApi(accessToken, method, urlPath, obj)
	}

	getList (obj) {
		let nObj
		if (obj === undefined) nObj = { status: undefined, sort: 'anime_title', limit: 100, offset: 0, fields: checkFields(userAnime) }
		else nObj = { status: obj.status || undefined, sort: obj.sort || 'anime_title', limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(userAnime, obj.fields) }
		return this.fetapi('get', `/users/${obj ? obj.userName || '@me' : '@me'}/animelist`, nObj)
	}

	deleteList (id) {
		return this.fetapi('delete', `/anime/${id}`)
	}

	updateList (id, obj) {
		return this.fetapi('put', `/anime/${id}`, obj)
	}
}

module.exports = UserAnimeList
