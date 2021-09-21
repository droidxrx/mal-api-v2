const { fetApi } = require('./utils/fetchs')
const { userManga } = require('./utils/listFields')
const checkFields = require('./utils/checkFields')

class UserMangaList {
	constructor (accessToken) {
		this.fetapi = (method, urlPath, obj) => fetApi(accessToken, method, urlPath, obj)
	}

	getList (obj) {
		let nObj
		if (obj === undefined) nObj = { status: undefined, sort: 'manga_title', limit: 100, offset: 0, fields: checkFields(userManga) }
		else nObj = { status: obj.status || undefined, sort: obj.sort || 'manga_title', limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(userManga, obj.fields) }
		return this.fetapi('get', `/users/${obj ? obj.userName || '@me' : '@me'}/mangalist`, nObj)
	}

	deleteList (id) {
		return this.fetapi('delete', `/manga/${id}`)
	}

	updateList (id, obj) {
		return this.fetapi('put', `/manga/${id}`, obj)
	}
}

module.exports = UserMangaList
