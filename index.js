// our Node program -> JS running outside of browser
console.log('hello Web 36!')

const express = require('express')

const server = express()

// endpoints for Dogs

// endpoints for Adopters

// catch-all endpoint
server.use('*', (req, res) => {
  // req represents the request from the client
})

// start the server
