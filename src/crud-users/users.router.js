//Declaration of routes
const router = require('express').Router()

//Declaring services
const crudUsersServices = require('./users.services')

//Routes
router.get('/users', crudUsersServices.getUsers)

router.post('/users', crudUsersServices.createNewUser)

router.get('/users/:id', crudUsersServices.getOneUser)


//Expoting the router
module.exports = router