import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Prashant Patel',
        email: 'prashant@gmail.com',
        password: bcrypt.hashSync('prashant', 10)
    },
    {
        name: 'Ayaana Patel',
        email: 'ayaana@gmail.com',
        password: bcrypt.hashSync('ayaana', 10)
    },
    {
        name: 'Sara Patel',
        email: 'sara@gmail.com',
        password: bcrypt.hashSync('sara', 10)
    },
]

export default users