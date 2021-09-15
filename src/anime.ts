import Fetchs from './utils/fetchs'
import { animeFullFields, animeSearchQuery, animeSearchRanking, animeSearchSeasonal, animeSearchSuggested, obj } from './utils/interfaceType'
import { animeFull, animeInList } from './utils/listFields'
import checkFields from './utils/checkFields'
import { getSeason, checkSeason } from './utils/helperAnime'

export class Anime {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param accessToken
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param id Anime id
	 * @param fields Array {@link animeFullFields See}
	 * @returns
	 */
	async id (id: number, fields: animeFullFields = animeFull): Promise<obj> {
		return this.#fetchs.animeMangaById(this.#accessToken, 'anime', id, checkFields(animeFull, fields))
	}

	/**
	 * @param obj Object
	 * @property q String
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link animeSearchQuery.fields See} (optional)
	 * @returns
	 */
	async search (obj: animeSearchQuery): Promise<obj> {
		const nObj = { q: obj.q, limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime', nObj)
	}

	/**
	 * @param obj Object
	 * @property ranking_type Default 'all' {@link animeSearchRanking.ranking_type See}
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link animeSearchRanking.fields See} (optional)
	 * @returns
	 */
	async ranking (obj: animeSearchRanking): Promise<obj> {
		const nObj = { ranking_type: obj.ranking_type ?? 'all', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime/ranking', nObj)
	}

	/**
	 * @param obj Object
	 * @property year Default current year (optional)
	 * @property season Default current season (optional)
	 * @property sort Default 'anime_score' (optional)
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link animeSearchSeasonal.fields See} (optional)
	 * @returns
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
	 * @param obj Object
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link animeSearchSuggested.fields See} (optional)
	 * @returns
	 */
	async suggested (obj: animeSearchSuggested): Promise<obj> {
		const nObj = { limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(animeInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'anime/suggestions', nObj)
	}
}