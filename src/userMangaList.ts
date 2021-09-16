import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userMangaList, obj, userMangaListUpdate } from './utils/interfaceType'
import { userManga } from './utils/listFields'

export class UserMangaList {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param {string} accessToken access_token
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param {userMangaList} obj Object
	 */
	 async getList (obj: userMangaList): Promise<obj> {
		const nObj = { status: obj.status, sort: obj.sort ?? 'manga_title', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(userManga, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${obj.user_name ?? '@me'}/mangalist`, nObj)
	}

	/**
	 * @param {number} mangaId Anime id
	 */
	 async deleteList (mangaId: number): Promise<obj> {
		return this.#fetchs.animeMangaDeleteList(this.#accessToken, 'manga', mangaId)
	}

	/**
	 * @param {userMangaListUpdate} obj Object
	 */
	 async updateList (obj: userMangaListUpdate): Promise<obj> {
		return this.#fetchs.animeMangaUpdateList(this.#accessToken, 'manga', obj)
	}
}