const { fetApi } = require('./utils/fetchs')
const { user } = require('./utils/listFields')
const checkFields = require('./utils/checkFields')

class User {
	constructor (accessToken) {
		this.fetapi = (urlPath, obj) => fetApi(accessToken, 'get', urlPath, obj)
	}

	get (obj) {
		if (obj === undefined) obj = { userName: '@me', fields: user }
		return this.fetapi(`/users/${obj.userName}`, { fields: checkFields(user, obj.fields) })
	}
}

module.exports = User
