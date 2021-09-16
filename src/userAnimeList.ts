import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userAnimeList, obj, userAnimeListUpdate } from './utils/interfaceType'
import { userAnime } from './utils/listFields'

export class UserAnimeList {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param {string} accessToken access_token
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param {userAnimeList} obj Object
	 */
	async getList (obj: userAnimeList): Promise<obj> {
		const nObj = { status: obj.status, sort: obj.sort ?? 'anime_title', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(userAnime, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${obj.user_name ?? '@me'}/animelist`, nObj)
	}

	/**
	 * @param {number} animeId Anime id
	 */
	async deleteList (animeId: number): Promise<obj> {
		return this.#fetchs.animeMangaDeleteList(this.#accessToken, 'anime', animeId)
	}

	/**
	 * @param {userAnimeListUpdate} obj Object
	 */
	async updateList (obj: userAnimeListUpdate): Promise<obj> {
		return this.#fetchs.animeMangaUpdateList(this.#accessToken, 'anime', obj)
	}
}