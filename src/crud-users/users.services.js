//Importing controllers
const { getAllUsers, getUserById, createUser } = require('./users.controllers')

//Returns a list of all data in the database
const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

//Returns one user from the database
const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({message: 'User not found or invalid data'})
    }
}

//Creates a new user
const createNewUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body
    if(first_name && last_name && email && password && birthday){
        const data = createUser(first_name, last_name, email, password, birthday)
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Missing data'})
    }
}

module.exports = {
    getUsers,
    getOneUser,
    createNewUser
}