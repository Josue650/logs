const mongoose = require('mongoose')

// Make a schema
const logsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: Boolean
})

// Make a model from the schema
const Log = mongoose.model('Log', logsSchema)

// Export the MOdel for use in the App

module.exports = Log
