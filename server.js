require('dotenv').config()

// Require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.use((req, res, next) => {
  res.locals.data = {}
})
app.engine('jsx', require ('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/logs', require('./controllers/routeController'))
/* END Middleware */


// Tell the app to listen on a port
app.listen(3003, () => {
    console.log('Listening on Port 3005')
})
