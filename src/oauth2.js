const { fetToken, generateUrlAuthentication } = require('./utils/fetchs')
const pkce = require('./utils/pkce')

class Oauth2 {
	constructor (obj) {
		this.clientId = obj.clientId
		this.clientSecret = obj.clientSecret || undefined
		this.urlRedirect = obj.urlRedirect || undefined
	}

	pkceGenerate (length = 43) {
		return pkce.generate(length)
	}

	pkceVerifyChallenge (codeVerifier, codeChallenge) {
		return pkce.verify(codeVerifier, codeChallenge)
	}

	urlAuthorize (codeChallenge, state = undefined) {
		const obj = { response_type: 'code', client_id: this.clientId, state, redirect_uri: this.urlRedirect, code_challenge: codeChallenge, code_challenge_method: 'plain' }
		return generateUrlAuthentication(obj)
	}

	getToken (code, codeChallenge) {
		const dataSend = { client_id: this.clientId, client_secret: this.clientSecret, grant_type: 'authorization_code', code, redirect_uri: this.urlRedirect, code_verifier: codeChallenge }
		return fetToken(dataSend)
	}

	refreshToken (refreshToken) {
		return fetToken({ client_id: this.clientId, client_secret: this.clientSecret, grant_type: 'refresh_token', refresh_token: refreshToken })
	}
}
module.exports = Oauth2
