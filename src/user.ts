import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userFields, obj } from './utils/interfaceType'
import { user } from './utils/listFields'

export class User {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param accessToken
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	async get (userName: string = '@me', fields: userFields = user): Promise<obj> {
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${userName}`, { fields: checkFields(user, fields) })
	}
}