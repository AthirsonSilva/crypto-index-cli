const ConfigStore = require('configstore')
const { name } = require('../package.json')

class KeyManager {
	constructor() {
		this.conf = new ConfigStore(name)
	}

	setKey(key) {
		this.conf.set('apiKey', key)
		return key
	}

	getKey() {
		const key = this.conf.get('apiKey')

		if (!key)
			throw new Error(
				'No API Key found -- Get a key at https://www.coinapi.io/Pricing'
			)

		return key
	}

	removeKey() {
		const key = this.conf.get('apiKey')

		if (!key)
			throw new Error(
				'No API Key found -- Get a key at https://www.coinapi.io/Pricing'
			)

		this.conf.delete('apiKey')

		return
	}
}

module.exports = KeyManager
