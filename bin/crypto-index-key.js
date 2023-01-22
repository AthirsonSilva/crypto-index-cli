const program = require('commander')
const key = require('../commands/key')

program
	.command('set')
	.description('set API Key -- https://www.coinapi.io/Pricing')
	.action(key.set)

program.command('show').description('Show API Key').action(key.show)

program.command('remove').description('Remove API Key').action(key.remove)

program.parse(process.argv)
