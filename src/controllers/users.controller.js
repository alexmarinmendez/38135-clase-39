import { createUser, findUsers } from "../services/users.service.js"

export async function getHTMLOnWire(req, res) {
    const users = await findUsers()
    // res.render('html-onwire', {
    //     users: users
    // })
    res.json({users})
}

export async function postHTMLOnWire(req, res) {
    const user = req.body
    await createUser(user)
    // res.redirect('/users/html-onwire')
    res.json({user})
}