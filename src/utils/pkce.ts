import { createHash, randomBytes } from 'crypto'
import { codePair } from './interfaceType'

function random (size: number, mask: string): string {
	const byteLength = Math.pow(2, 8)
	const scalingFactor = byteLength / Math.min(mask.length, byteLength)
	let result = ''
	for (let i = 0; i < size; i++) result += mask[Math.floor(randomBytes(size)[i] / scalingFactor)]
	return result
}
function base64UrlEncode (base64: string): string {
	return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}
function generateVerifier (length: number): string {
	return random(length, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~')
}
function generateChallenge (codeVerifier: string): string {
	return base64UrlEncode(createHash('sha256').update(codeVerifier).digest('base64'))
}
export function pkceGenerate (length: number): codePair {
	if (length < 43 || length > 128) throw new Error(`Expected a length between 43 and 128. Received ${length}.`)
	const verifier = generateVerifier(length)
	return { code_challenge: generateChallenge(verifier), code_verifier: verifier }
}
export function verifyChallenge (codeVerifier: string, codeChallenge: string): boolean {
	return generateChallenge(codeVerifier) === codeChallenge
}