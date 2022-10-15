require('dotenv').config()

// Require modules
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Log = require('./models/log')
const {logs} = require('./models/log')


// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
app.engine('jsx', require ('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */



/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET

app.get('/logs', (req, res) => {
  Log.find({}, (err, foundLogs) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('logs/Index', {
        logs: foundLogs
      })
    }
  })
})

// NEW (Not applicable in an api)
app.get('/logs/new', (req, res) => {
    res.render('logs/New')

})

// DELETE

app.delete('/logs/:id', (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect('/logs')
    }
  })
})

// UPDATE

app.put('/logs/:id', (req, res) => {
  req.body.shipIsBroken === 'on' || req.body.shipIsBroken === true ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
  Log.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.redirect(`/logs/${updatedLog._id}`)
    }
  })
})

// CREATE

app.post('/logs', (req, res) =>{
    // req.body which contains all of our form Data we will get from the user
    req.body.shipIsBroken === 'on' ? req.body.shipIsBroken = true : req.body.shipIsBroken = false
    Log.create(req.body, (err, createdLogs) => {
      if(err){
        console.error(err)
        res.status(400).send(err)
      } else {
        res.redirect('/logs')
      }
    })
  })

// EDIT (not applicable in an api)

app.get('/logs/:id/edit', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('logs/Edit', {
        log: foundLog
      })
    }
  })
})

// SHOW ---- READ ---- GET

app.get('/logs/:id', (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if(err){
      console.error(err)
      res.status(400).send(err)
    } else {
      res.render('logs/Show', {
        log: foundLog
      })
    }
  })
})

/* END ROUTES */

// Tell the app to listen on a port
app.listen(3005, () => {
    console.log('Listening on Port 3005')
})
