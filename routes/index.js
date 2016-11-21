'use strict'

const { Router } = require('express')
const router = Router()

const home = require('../controller/home')

router.get('/', home.index)

module.exports = router