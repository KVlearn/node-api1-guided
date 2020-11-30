// our Node program -> JS running outside of browser
console.log('hello Web 36!')

const express = require('express')
const shortid = require('shortid')

const server = express()

// configure our server (PLUG FUNCTIONALITY)
server.use(express.json())

// fake Dogs table inside a fake Lamdba Shelter db
let dogs = [
  { id: shortid.generate(), name: 'Captain', weight: 25, adopter_id: null },
]

// helper functions to interact with the Dogs fake table
const Dog = {
  getAll() {
    return dogs
  },
  getById(id) {
    return dogs.find(dog => dog.id === id)
  },
  createNew() {

  },
}

// endpoints for Dogs
server.get('/api/dogs', (req, res) => {
  // 1- gather info from the request object
  // 2- interact with db
  const dogs = Dog.getAll()
  // 3- send to client an appropriate reponse
  res.status(200).json(dogs)
})
server.get('/api/dogs/:id', (req, res) => {
  // 1- gather info from the request object
  const { id } = req.params
  // 2- interact with db
  const dog = Dog.getById(id)
  // 3- send to client an appropriate reponse
  if (dog) {
    res.status(200).json(dog)
  } else {
    res.status(404).json({ message: 'dog not found with id ' + id })
  }
})
server.post('/api/dogs', (req, res) => {
  // EXPRESS, BY DEFAULT IS NOT PARSING THE BODY OF THE REQUEST
  // 1- gather info from the request object
  // 2- interact with db
  // 3- send to client an appropriate reponse
}) 

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
