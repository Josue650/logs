const mongoose = require('mongoose')

// Make a schema
const logSchema = new mongoose.Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: Boolean
})

// Make a model from the schema
const Log = mongoose.model('Log', logSchema)

// Export the MOdel for use in the App

module.exports = Log
