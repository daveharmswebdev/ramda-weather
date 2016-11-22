'use strict'

const {expect} = require('chai')
const weather = require('../data/weather')
const getCity = require('../lib/getCity')
const getDateRange = require('../lib/getDateRange')
const { getUTCDates } = require('../lib/helper-methods')
const { avgTemp } = require('../lib/temp')

describe('get city and date range and temp methods', () => {

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
			'Mon, Nov 21',
			'Tue, Nov 22',
			'Wed, Nov 23',
			'Thu, Nov 24',
			'Fri, Nov 25',
			'Sat, Nov 26',
			'Sun, Nov 27'
		])
	})
	it('should return a date range', () => {
		expect(getDateRange(report)).to.equal('Mon, Nov 21 to Sun, Nov 27')
	})
	it('should return an average temp', () => {
		const temps = avgTemp(report, 'day')
		console.log('temps', temps)
		expect(temps).to.equal(4.63)
	})
})