'use strict'

const { expect } = require('chai')
const request = require('supertest')
const app = require('../server/server')

describe('test suite', () => {
	it('true should be true', () => {
		expect(true).to.equal(true)
	})
})

describe('get root suite', () => {
	it('`get /` should return json', done => {
		request(app)
		  .get('/')
		  .expect('Content-Type', /json/)
		  .expect(200, done)
	})
})