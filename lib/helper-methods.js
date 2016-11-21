'use strict'

const { compose } = require('ramda')

const getDate = list => list.map(item => item.dt)

const getUTC = dates => dates.map(item => new Date(item*1000).toString())

const getList = report => report.list

module.exports.getUTCDates = compose(getUTC, getDate, getList)