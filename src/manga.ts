import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { mangaFullFields, mangaSearchQuery, mangaSearchRanking, obj } from './utils/interfaceType'
import { mangaFull, mangaInList } from './utils/listFields'

export class Manga {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param accessToken
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param id Manga id
	 * @param fields Array {@link mangaFullFields See}
	 * @returns
	 */
	 async id (id: number, fields: mangaFullFields = mangaFull): Promise<obj> {
		return this.#fetchs.animeMangaById(this.#accessToken, 'manga', id, checkFields(mangaFull, fields))
	}

	/**
	 * @param obj Object
	 * @property q String
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link mangaSearchQuery.fields See} (optional)
	 * @returns
	 */
	 async search (obj: mangaSearchQuery): Promise<obj> {
		const nObj = { q: obj.q, limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(mangaInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'manga', nObj)
	}

	/**
	 * @param obj Object
	 * @property ranking_type Default 'all' {@link mangaSearchRanking.ranking_type See}
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link mangaSearchRanking.fields See} (optional)
	 * @returns
	 */
	 async ranking (obj: mangaSearchRanking): Promise<obj> {
		const nObj = { ranking_type: obj.ranking_type ?? 'all', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(mangaInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'manga/ranking', nObj)
	}
}