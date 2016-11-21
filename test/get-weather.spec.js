'use strict'

const {expect} = require('chai')
const weather = require('../data/weather')
const getCity = require('../lib/getCity')
const getDateRange = require('../lib/getDateRange')
const { getDates } = require('../lib/helper-methods')

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
	it('should return a list of dates in milliseconds', () => {
		expect(getDates(report)).to.deep.equal([
			1479747600, 
			1479834000, 
			1479920400, 
			1480006800, 
			1480093200,
			1480179600,
			1480266000
		])
	})
	it('should return a date range', () => {
		expect(getDateRange(report)).to.equal('Monday, Nov 21 to Sunday, Nov 27')
	})
})