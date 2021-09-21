const { createHash, randomBytes } = require('crypto')

function random (size, mask) {
	const byteLength = Math.pow(2, 8)
	const scalingFactor = byteLength / Math.min(mask.length, byteLength)
	let result = ''
	for (let i = 0; i < size; i++) result += mask[Math.floor(randomBytes(size)[i] / scalingFactor)]
	return result
}
function base64UrlEncode (base64) {
	return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}
function generateVerifier (length) {
	return random(length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~')
}
function generateChallenge (codeVerifier) {
	return base64UrlEncode(createHash('sha256').update(codeVerifier).digest('base64'))
}
function generate (length) {
	if (length < 43 || length > 128) throw new Error(`Expected a length between 43 and 128. Received ${length}.`)
	const verifier = generateVerifier(length)
	return { code_challenge: generateChallenge(verifier), code_verifier: verifier }
}
function verify (codeVerifier, codeChallenge) {
	return generateChallenge(codeVerifier) === codeChallenge
}

exports.generate = generate
exports.verify = verify
