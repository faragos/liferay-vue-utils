#!/usr/bin/env node

var main = require('../index')
const args = process.argv.slice(2)
var url = args[0];

main(url, process.cwd())