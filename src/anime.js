const { fetApi } = require('./utils/fetchs')
const { animeFull, animeInList } = require('./utils/listFields')
const checkFields = require('./utils/checkFields')
const { getSeason, checkSeason } = require('./utils/helperAnime')

class Anime {
	constructor (accessToken) {
		this.fetapi = (urlPath, obj) => fetApi(accessToken, 'get', urlPath, obj)
	}

	id (id, fields = animeFull) {
		return this.fetapi(`/anime/${id}`, { fields: checkFields(animeFull, fields) })
	}

	search (obj) {
		const nObj = { q: obj.q, limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(animeInList, obj.fields) }
		return this.fetapi('/anime', nObj)
	}

	ranking (obj) {
		const nObj = { ranking_type: obj.ranking_type || 'all', limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(animeInList, obj.fields) }
		return this.fetapi('/anime/ranking', nObj)
	}

	seasonal (obj) {
		const nObj = { sort: obj.sort || 'anime_score', limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(animeInList, obj.fields) }
		const yearSeason = () => {
			if (obj.season !== undefined && checkSeason(obj.season)) return obj.season
			else return getSeason(+(new Date().toLocaleString('default', { month: 'numeric' })))
		}
		return this.fetapi(`/anime/season/${obj.year || new Date().getFullYear()}/${yearSeason()}`, nObj)
	}

	suggested (obj) {
		const nObj = { limit: obj.limit || 100, offset: obj.offset || 0, fields: checkFields(animeInList, obj.fields) }
		return this.fetapi('/anime/suggestions', nObj)
	}
}

module.exports = Anime
