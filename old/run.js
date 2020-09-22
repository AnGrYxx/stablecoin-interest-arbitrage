/*jslint node: true */
"use strict";

const eventBus = require('ocore/event_bus.js');
const network = require('ocore/network.js');
const conf = require('ocore/conf.js');

const operator = require('aalib/operator.js');
const arb = require('./arb.js');


eventBus.on('headless_wallet_ready', async () => {
	await operator.start();

	if (!conf.arb_aa)
		throw Error("Please specify arb_aa in conf.json");

	network.start();
	await arb.startWatching();
});

process.on('unhandledRejection', up => { throw up; });