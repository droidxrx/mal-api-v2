import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { mangaFullFields, mangaSearchQuery, mangaSearchRanking, obj } from './utils/interfaceType'
import { mangaFull, mangaInList } from './utils/listFields'

export class Manga {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 *@param {string} accessToken access_token
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param {number} id Manga id
	 * @param {mangaFullFields} [fields] Array string {@link mangaFullFields see}
	 */
	 async id (id: number, fields: mangaFullFields = mangaFull): Promise<obj> {
		return this.#fetchs.animeMangaById(this.#accessToken, 'manga', id, checkFields(mangaFull, fields))
	}

	/**
	 * @param {mangaSearchQuery} obj Manga search query
	 */
	 async search (obj: mangaSearchQuery): Promise<obj> {
		const nObj = { q: obj.q, limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(mangaInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'manga', nObj)
	}

	/**
	 * @param {mangaSearchRanking} obj Manga search ranking query
	 */
	 async ranking (obj: mangaSearchRanking): Promise<obj> {
		const nObj = { ranking_type: obj.ranking_type ?? 'all', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(mangaInList, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, 'manga/ranking', nObj)
	}
}