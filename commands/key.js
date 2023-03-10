const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/key-manager')
const isRequired = require('../utils/validation')

const key = {
	async set() {
		const keyManager = new KeyManager()

		const input = await inquirer.prompt([
			{
				type: 'input',
				name: 'key',
				message:
					'Enter API Key'.green + ' https://www.coinapi.io/Pricing',
				validate: isRequired
			}
		])

		const key = keyManager.setKey(input.key)

		if (key) {
			console.log('API Key Set'.blue)
		}
	},

	show() {
		try {
			const keyManager = new KeyManager()

			const key = keyManager.getKey()

			console.log('Current API Key: ', key.yellow)

			return key
		} catch (error) {
			console.error(error.message.red)
		}
	},

	remove() {
		try {
			const keyManager = new KeyManager()

			keyManager.removeKey()
			console.log('API Key Removed'.blue)

			return
		} catch (error) {
			console.error(error.message.red)
		}
	}
}

module.exports = key
