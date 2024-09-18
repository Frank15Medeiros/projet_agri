import express from 'express'

const router = express.Router()

router.post('/signup', (req, res) => {
    const {username, email, password, Name, Surname, Address, City, PostalCode} = req.body;
    console.log(username,)

})

export default router;