import { codePair, obj } from './utils/interfaceType'
import Fetchs from './utils/fetchs'
import { pkceGenerate, verifyChallenge } from './utils/pkce'
export class Oauth2 {
	#clientId: string
	#clientSecret: string
	#urlRedirect: string = ''
	#fetchs = new Fetchs()

	/**
	 * @param clientId String https://myanimelist.net/apiconfig/create
	 * @param clientSecret String (optional)
	 */
	constructor (clientId: string, clientSecret: string = '') {
		this.#clientId = clientId
		this.#clientSecret = clientSecret
	}

	/**
	 * @param length Default 43 (optional)
	 */
	pkceGenerate (length: number = 43): codePair {
		return pkceGenerate(length)
	}

	/**
	 * @param codeVerifier Get this from method pkceGenerate
	 * @param codeChallenge Get this from method pkceGenerate
	 */
	pkceVerifyChallenge (codeVerifier: string, codeChallenge: string): boolean {
		return verifyChallenge(codeVerifier, codeChallenge)
	}

	/**
	 * @param codeChallenge Get this from method pkceGenerate
	 * @param urlRedirect Optional if you set more than one redirect url from api configuration
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
