const colors = require('colors')

function parseOutput(response, currencyOption) {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currencyOption
	})

	if (
		response.asset_id_base === undefined &&
		response.asset_id_quote === undefined &&
		response.rate === undefined &&
		response.time === undefined
	) {
		return 'ERROR: No data available. Please verify if your API key is valid or the inputs are correct.'
			.red
	}

	const coin = `${'Coin'.blue}: ${response.asset_id_base} (${
		response.asset_id_base
	})`
	const currency = `${'Currency'.blue}: ${response.asset_id_quote} (${
		response.asset_id_quote
	})`
	const rate = `${'Rate'.blue}: ${formatter.format(response.rate)}`
	const time = `${'Last 24h'.blue}: ${response.time}`

	return `\n${coin} \n${currency} \n${rate} \n${time}`
}

module.exports = parseOutput
