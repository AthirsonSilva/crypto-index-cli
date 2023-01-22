const axios = require('axios')
const color = require('colors')
const format = require('../utils/format-output')
const parseOutput = require('../utils/format-output')

class CryptoAPI {
	constructor(apiKey) {
		this.apiKey = apiKey
		this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate'
	}

	async getPriceData(coinOption, currencyOption) {
		try {
			const response = await fetch(
				`${this.baseUrl}/${coinOption}/${currencyOption}`,
				{
					headers: {
						'X-CoinAPI-Key': this.apiKey
					}
				}
			)

			const json = await response.json()

			return parseOutput(json, currencyOption)
		} catch (error) {
			console.log(error.message.red)
		}
	}
}

module.exports = CryptoAPI
