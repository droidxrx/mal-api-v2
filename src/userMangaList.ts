import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userMangaList, obj, userMangaListUpdate } from './utils/interfaceType'
import { userManga } from './utils/listFields'

export class UserMangaList {
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
	 * @property sort Default 'manga_title' (optional)
	 * @property limit Default 100 (optional)
	 * @property offset Default 0 (optional)
	 * @property fields Array {@link userMangaList.fields See} (optional)
	 * @returns
	 */
	 async getList (obj: userMangaList): Promise<obj> {
		const nObj = { status: obj.status, sort: obj.sort ?? 'manga_title', limit: obj.limit ?? 100, offset: obj.offset ?? 0, fields: checkFields(userManga, obj.fields) }
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${obj.user_name ?? '@me'}/mangalist`, nObj)
	}

	/**
	 * @param mangaId Anime id
	 * @returns
	 */
	 async deleteList (mangaId: number): Promise<obj> {
		return this.#fetchs.animeMangaDeleteList(this.#accessToken, 'manga', mangaId)
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
	 async updateList (obj: userMangaListUpdate): Promise<obj> {
		return this.#fetchs.animeMangaUpdateList(this.#accessToken, 'manga', obj)
	}
}