//Require express
const express = require('express')

//Run the express function
const app = express()

//Receiving data in JSON format
app.use(express.json())

//Importing routes
const userRouter = require('./crud-users/users.router')

//Incorporating 3 files in the MVC
app.use('/', userRouter)

//Default petition
app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK'})
})

//Listen to the port
app.listen(8000, () => {
    console.log('Listening on port 8000');
})