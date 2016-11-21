'use strict'
const weather = require('../data/weather')

module.exports.index = (req, res) => {
	weather.then(weather => {
		res.json(weather)
	})
}