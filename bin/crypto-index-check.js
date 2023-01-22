const program = require('commander')
const check = require('../commands/check')

program
	.command('price')
	.description('Check price of crypto currencies')
	.option(
		'--coin <type>',
		'Add specific crypto currencies types in CSV format',
		'BTC,ETH,XRP'
	)
	.option('--currency <currency>', 'Change the currency', 'USD')
	.action((cmd) => check.price(cmd))

program.parse(process.argv)
