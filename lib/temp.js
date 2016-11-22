'use strict'

const { pipe, reduce } = require('ramda')

// extract temp and turn into an array
const arrayOfTemps = (report, key) => report.list.map(day => day.temp[key])
// convert kelvin to metric
const convertKelvinToMetric = temps => temps.map(temp => temp - 273.15)
const roundToTwo = temps => temps.map(temp => Math.round(100*temp)/100)
const getAverage = temps => Math.round((reduce(add, 0, temps)/temps.length)*100)/100 
const add = (a, b) => a + b
// convert metric array to average
// convert metric array to range
module.exports.avgTemp = pipe(arrayOfTemps, convertKelvinToMetric, roundToTwo, getAverage)