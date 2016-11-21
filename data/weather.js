'use strict'

const fs = require('fs')
const path = require('path')

module.exports = new Promise((resolve, reject) => {
	fs.readFile(path.join(__dirname,'../data/weather.json'), (err, data) => {
		if (data) {
			resolve(JSON.parse(data))
		} else {
			reject(err)
		}
	})
})