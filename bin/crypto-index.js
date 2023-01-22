#!/usr/bin/env node
const program = require('commander')
const { version } = require('../package.json')

program
	.version(version)
	.command('key', 'Manage API Key -- https://www.coinapi.io/Pricing')
	.command('check', 'Check Coin Price Info')
	.parse(process.argv)
