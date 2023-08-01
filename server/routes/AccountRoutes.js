import express from "express"
import Account from "../Models/AccountModels.js"

const router = express.Router()

router.post('/login', async(req, res) => {
    const data = await Account.exists({ username: req.body.username})
    if (data) {
        const result = await Account.findById(data._id)
        if (result.password === req.body.password) {
            await res.status(200).json({redirect: '/', success: true, mail: result.email})
        } else {
            res.status(404).json({msg: 'Your password is incorrect', success: false})
        }
    } else {
        res.status(404).json({msg: "Your username is incorrect or does not exist", success: false})
    }
})

router.post('/sign-up', async(req, res) => {
    await Account.create(req.body)  
    await res.status(201).redirect('/')
})

export default router