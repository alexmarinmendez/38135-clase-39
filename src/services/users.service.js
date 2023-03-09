import usersMem from '../models/usersMem.js'

// const usersMem = new UsersMem()

export async function findUsers() {
    return usersMem.findAll()
}

export async function createUser(user) {
    return usersMem.create(user)
}