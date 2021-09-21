const { fetApi } = require('./utils/fetchs')
const { mangaFull, mangaInList } = require('./utils/listFields')
const checkFields = require('./utils/checkFields')

class Manga {
	constructor (accessToken) {
		this.fetapi = (urlPath, obj) => fetApi(accessToken, 'get', urlPath, obj)
	}

	id (id, fields = mangaFull) {
		return this.fetapi(`/manga/${id}`, { fields: checkFields(mangaFull, fields) })
	}

	search (obj) {
		const nObj = { q: obj.q, limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(mangaInList, obj.fields) }
		return this.fetapi('/manga', nObj)
	}

	ranking (obj) {
		const nObj = { ranking_type: obj.ranking_type || 'all', limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(mangaInList, obj.fields) }
		return this.fetapi('/manga/ranking', nObj)
	}
}

module.exports = Manga
