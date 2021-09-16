import checkFields from './utils/checkFields'
import Fetchs from './utils/fetchs'
import { userFields, obj } from './utils/interfaceType'
import { user } from './utils/listFields'

export class User {
	#accessToken: string
	#fetchs = new Fetchs()

	/**
	 * @param {string} accessToken access_token
	 */
	constructor (accessToken: string) {
		this.#accessToken = accessToken
	}

	/**
	 * @param {string} [userName] Default '@me' (optional)
	 * @param {userFields} [fields] Array string {@link userFields see} (optional)
	 */
	async get (userName: string = '@me', fields: userFields = user): Promise<obj> {
		return this.#fetchs.searchAnimeManga(this.#accessToken, `users/${userName}`, { fields: checkFields(user, fields) })
	}
}