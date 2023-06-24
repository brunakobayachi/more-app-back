const express = require('express')
const app = express()
const config = require('./config/application.config')
const mongoose = require('mongoose')
const TestController = require('./routes/test.route')

/**
 * Set up the MongoDB connection.
 */

const connectToMongo = async () => {
	await mongoose.connect(config.mongo.url, config.mongo.config)

	console.log('MongoDB connected with success')
}

connectToMongo()

/**
 * Load the json module to parse POST and PUT request.
 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/test', TestController)

module.exports = app
