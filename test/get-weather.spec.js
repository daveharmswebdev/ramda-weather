'use strict'

const {expect} = require('chai')
const weather = require('../data/weather')
const getCity = require('../lib/getCity')
const getDateRange = require('../lib/getDateRange')
const { getUTCDates } = require('../lib/helper-methods')

describe('get city', () => {

	let report

	beforeEach( done => {
		weather.then(data => {
			report = data
			done()
		})
	})

	it('return the city of nashville', () => {
		expect(getCity(report)).to.equal('Nashville')
	})
	it('should return of list of dates in UTC', () => {
		expect(getUTCDates(report)).to.deep.equal([
			'Mon Nov 21 2016 11:00:00 GMT-0600 (CST)',
			'Tue Nov 22 2016 11:00:00 GMT-0600 (CST)',
			'Wed Nov 23 2016 11:00:00 GMT-0600 (CST)',
			'Thu Nov 24 2016 11:00:00 GMT-0600 (CST)',
			'Fri Nov 25 2016 11:00:00 GMT-0600 (CST)',
			'Sat Nov 26 2016 11:00:00 GMT-0600 (CST)',
			'Sun Nov 27 2016 11:00:00 GMT-0600 (CST)'
		])
	})
	it('should return a date range', () => {
		expect(getDateRange(report)).to.equal('Mon, Nov 21 to Sun, Nov 27')
	})
})