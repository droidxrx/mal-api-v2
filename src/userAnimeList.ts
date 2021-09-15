import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userAnimeList, obj, userAnimeListUpdate } from './utils/interfaceType'
import { userAnime } from './utils/listFields'

export class UserAnimeList {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param accessToken
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param obj Object
	 * @property user_name Default '@me' (optional)
	 * @property status (optional)
	 * @property sort Default 'anime_title' (optional)
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link userAnimeList.fields See} (optional)
	 * @returns
	 */
	async getList (obj: userAnimeList): Promise<obj> {
		const nObj = { status: obj.status, sort: obj.sort ?? 'anime_title', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(userAnime, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${obj.user_name ?? '@me'}/animelist`, nObj)
	}

	/**
	 * @param animeId Anime id
	 * @returns
	 */
	async deleteList (animeId: number): Promise<obj> {
		return this.#fetchs.animeMangaDeleteList(this.#accessToken, 'anime', animeId)
	}

	/**
	 * @param obj Object
	 * @property status
	 * @property is_rewatching
	 * @property score
	 * @property num_watched_episodes
	 * @property priority
	 * @property num_times_rewatched
	 * @property rewatch_value
	 * @property tags
	 * @property comments
	 * @returns
	 */
	async updateList (obj: userAnimeListUpdate): Promise<obj> {
		return this.#fetchs.animeMangaUpdateList(this.#accessToken, 'anime', obj)
	}
}