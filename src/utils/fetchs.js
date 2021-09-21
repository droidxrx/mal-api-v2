const { agent, post } = require('superagent')
const { stringify } = require('query-string')

function qs (obj) {
	return stringify(obj, { arrayFormat: 'comma', skipEmptyString: true, skipNull: true })
}

function fetApi (accessToken, method, urlPath, obj) {
	const fetchs = agent().set({ Authorization: `Bearer ${accessToken}` })
	const url = `https://api.myanimelist.net/v2${urlPath}`
	return new Promise((resolve, reject) => {
		const resol = (resp) => resolve({ status: true, return: resp.body })
		const reje = (err) => reject(Object.assign({ status: false }, { retaurn: JSON.parse(err.response.text) }))
		if (method === 'delete') fetchs.delete(`${url}/my_list_status`).then(() => resolve({ status: true, return: { message: 'Delete success.' } })).catch((err) => err.response.status > 400 && reje(err))
		else if (method === 'put') fetchs.put(`${url}/my_list_status`).type('application/x-www-form-urlencoded').send(qs(obj)).then(resol).catch(reje)
		else if (method === 'get') fetchs.get(`${url}?${qs(obj)}`).then(resol).catch(reje)
	})
}

function fetToken (obj) {
	return new Promise((resolve, reject) => {
		const resol = (resp) => resolve({ status: true, return: resp.body })
		const reje = (err) => reject(Object.assign({ status: false }, { retaurn: JSON.parse(err.response.text) }))
		post('https://myanimelist.net/v1/oauth2/token').type('application/x-www-form-urlencoded').send(qs(obj)).then(resol).catch(reje)
	})
}

function generateUrlAuthentication (obj) {
	return `https://myanimelist.net/v1/oauth2/authorize?${qs(obj)}`
}

exports.fetApi = fetApi
exports.fetToken = fetToken
exports.generateUrlAuthentication = generateUrlAuthentication
