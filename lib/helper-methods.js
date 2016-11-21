'use strict'

const getDate = item => item.dt

const getDates = report => {
	const list = report.list
	return list.map(getDate)
}

module.exports = {
	getDates
}