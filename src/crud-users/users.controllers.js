const uuid = require('uuid')

//Database
const usersDB = [
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26446',
        first_name: 'Daniel',
        last_name: 'Oyola',
        email: 'danieloyola@myemail.com',
        password: '123456',
        birthday: '1990-01-07'

    },
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26558',
        first_name: 'Carla',
        last_name: 'Torrez',
        email: 'carlita@myemail.com',
        password: '123456',
        birthday: '1997-03-16'

    },
    {
        id: '968dc483-dd6e-4ee1-9e8e-129e76c26112',
        first_name: 'Rigoberto',
        last_name: 'Menchu',
        email: 'rigo@myemail.com',
        password: '123456',
        birthday: '1988-10-20'

    }

]

//Get all the users in the database
const getAllUsers = () => {
    return usersDB
}

//Get only one user
const getUserById = (id) => {
    const data = usersDB.find(query => query.id === id)
    return data
}

//Create a new user
const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser = {
        id: uuid.v4(), 
        first_name, 
        last_name,
        email,
        password,
        birthday
    }

    //Pushing the new user to the database
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}