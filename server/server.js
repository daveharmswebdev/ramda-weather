'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('../routes/index')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.use(routes)

app.listen(PORT, () => {
	console.log('server now listening on port', PORT)
})

module.exports = app