'use strict'

const { getUTCDates } = require('../lib/helper-methods')

module.exports = report => {
	const dateRange = getUTCDates(report)
	return `${dateRange[0]} to ${dateRange[dateRange.length - 1]}`
}