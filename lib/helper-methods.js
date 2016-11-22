'use strict'

const { pipe } = require('ramda')

const getList = report => report.list
const getMSDate = list => list.map(item => item.dt)
const getUTC = dates => dates.map(item => 
	new Date(item*1000).toString())
const getTruncatedDate = dates => dates.map(string => 
	string.split(' ').slice(0,3).join(' '))
const addComma = dates => dates.map(string => 
	[string.slice(0,3), ',', string.slice(3)].join(''))

module.exports.getUTCDates = pipe(
	getList, 
	getMSDate, 
	getUTC, 
	getTruncatedDate, 
	addComma
)