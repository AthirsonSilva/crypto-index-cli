const KeyManager = require('../lib/key-manager')
const CryptoAPI = require('../lib/crypto-api')
const colors = require('colors')

const check = {
	async price(cmd) {
		try {
			const keyManager = new KeyManager()
			const key = keyManager.getKey()
			const api = new CryptoAPI(key)
			const priceData = await api.getPriceData(cmd.coin, cmd.currency)

			console.log(priceData)
		} catch (error) {
			console.log(error.message.red)
		}
	}
}

module.exports = check
