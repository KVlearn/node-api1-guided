// our Node program -> JS running outside of browser
console.log('hello Web 36!')

const express = require('express')
const shortid = require('shortid')

const server = express()

// fake Dogs table inside a fake Lamdba Shelter db
let dogs = [
  { id: shortid.generate(), name: 'Captain', weight: 25, adopter_id: null },
]

// helper functions to interact with the Dogs fake table
const Dog = {
  
}

console.log(dogs)

// endpoints for Dogs

// endpoints for Adopters

// catch-all endpoint
server.use('*', (req, res) => {
  // req represents the request from the client
  // res represents the response we build for the client
  res.status(404).json({ message: 'not found' })
})

// start the server
server.listen(5000, () => {
  console.log('listening on port 5000')
})
