// Require modules
 // this engine requires the fs module like we did Saturday
const express = require('express')


// Create our express app
const app = express()

// Configure the app (app.set)
/*Start Config */



/* END CONFIG */

// Mount our middleware (app.use)

/*Start Middleware */





/* END Middleware */

// Mount Routes
/*Start Routes */


// INDEX --- READ --- GET

// NEW (Not applicable in an api)

app.get('/logs/new', (req, res) => {
    res.render('logs/New')

})

// DELETE

// UPDATE
// create a createroute in your server.js- be sure to follow the Restful convention
// just have it res.send('received')as the response for now
// use and configure body-parserin your server.js(note, this package was once separate, but has been added back in to express more details
// Kill your server and restart. Check to make sure it works by changing the res.sendfrom a string to sending the req.body- it should send the data you inputted to your newform
// Update your data

// change the input of your checkbox to be true/false rather than on
// now when you check your res.send(req.body)you should see true/false rather than 'on/off' - the rest of your data should stay the same
// don't forget to git addand git commityour work, give yourself an informative commit message so you can trace back your work, if you need to

// CREATE

// EDIT (not applicable in an api)

// SHOW ---- READ ---- GET

/* END ROUTES */


// Tell the app to listen on a port
app.listen(3005, () => {
    console.log('Listening on Port 3005')
})
