import Fetchs from './utils/fetchs'
import { animeFullFields, animeSearchQuery, animeSearchRanking, animeSearchSeasonal, animeSearchSuggested, obj } from './utils/interfaceType'
import { animeFull, animeInList } from './utils/listFields'
import checkFields from './utils/checkFields'
import { getSeason, checkSeason } from './utils/helperAnime'

export class Anime {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param {string} accessToken access_token
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param {number} id Anime id
	 * @param {animeFullFields} [fields] Array string {@link animeFullFields see}
	 */
	async id (id: number, fields: animeFullFields = animeFull): Promise<obj> {
		return this.#fetchs.animeMangaById(this.#accessToken, 'anime', id, checkFields(animeFull, fields))
	}

	/**
	 * @param {animeSearchQuery} obj Anime search query
	 */
	async search (obj: animeSearchQuery): Promise<obj> {
		const nObj = { q: obj.q, limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime', nObj)
	}

	/**
	 * @param {animeSearchRanking} obj Anime search ranking query
	 */
	async ranking (obj: animeSearchRanking): Promise<obj> {
		const nObj = { ranking_type: obj.ranking_type ?? 'all', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime/ranking', nObj)
	}

	/**
	 * @param {animeSearchSeasonal} obj Anime search seasonal query
	 */
	async seasonal (obj: animeSearchSeasonal): Promise<obj> {
		const nObj = { sort: obj.sort ?? 'anime_score', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		const yearSeason = {
			y: obj.year ?? new Date().getFullYear(),
			s: (() => {
				if (obj.season !== undefined && checkSeason(obj.season)) return obj.season.toLowerCase()
				else return getSeason(+new Date().toLocaleString('default', { month: 'numeric' }))
			})(),
		}
		return this.#fetchs.searchAnimeManga(this.#accessToken, `anime/season/${yearSeason.y}/${yearSeason.s}`, nObj)
	}

	/**
	 * @param {animeSearchSuggested} obj Anime search suggested query
	 */
	async suggested (obj: animeSearchSuggested): Promise<obj> {
		const nObj = { limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime/suggestions', nObj)
	}
}