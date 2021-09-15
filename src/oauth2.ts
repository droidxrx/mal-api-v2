import { codePair, obj } from './utils/interfaceType'
import Fetchs from './utils/fetchs'
import { pkceGenerate, verifyChallenge } from './utils/pkce'
export class Oauth2 {
	#clientId: string
	#clientSecret: string
	#urlRedirect: string = ''
	#fetchs = new Fetchs()

	/**
	 * @param clientId https://myanimelist.net/apiconfig/create
	 * @param clientSecret Optional
	 */
	constructor (clientId: string, clientSecret: string = '') {
		this.#clientId = clientId
		this.#clientSecret = clientSecret
	}

	/**
	 * @param length Optional default is "43"
	 * @returns
	 */
	pkceGenerate (length: number = 43): codePair {
		return pkceGenerate(length)
	}

	/**
	 * @param codeVerifier Get this from method pkceGenerate
	 * @param codeChallenge Get this from method pkceGenerate
	 * @returns
	 */
	pkceVerifyChallenge (codeVerifier: string, codeChallenge: string): boolean {
		return verifyChallenge(codeVerifier, codeChallenge)
	}

	/**
	 * @param codeChallenge Get this from method pkceGenerate
	 * @param urlRedirect Optional if your set only one url redirect from api config
	 * @returns
	 */
	urlAuthorize (codeChallenge: string, urlRedirect: string = ''): string {
		this.#urlRedirect = urlRedirect
		return this.#fetchs.authorizeUrl({
			client_id: this.#clientId,
			code_challenge: codeChallenge,
			code_challenge_method: 'plain',
			redirect_uri: urlRedirect,
			response_type: 'code',
		})
	}

	/**
	 * @param code To get code you must access url from method urlAuthorize
	 * @param codeChallenge Get this from method pkceGenerate
	 * @returns
	 */
	async getToken (code: string, codeChallenge: string): Promise<obj> {
		return this.#fetchs.token({
			client_id: this.#clientId,
			client_secret: this.#clientSecret,
			code,
			code_verifier: codeChallenge,
			grant_type: 'authorization_code',
			redirect_uri: this.#urlRedirect,
		})
	}

	/**
	 * @param refreshToken Get this from method getToken
	 * @returns
	 */
	async refreshToken (refreshToken: string): Promise<obj> {
		return this.#fetchs.token({
			client_id: this.#clientId,
			client_secret: this.#clientSecret,
			refresh_token: refreshToken,
			grant_type: 'refresh_token',
		})
	}
}
