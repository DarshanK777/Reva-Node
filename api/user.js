// handle user data / updation

const express = require('express')
const User = require('../models/user')
const router = express.Router()
const authMiddleware = require('../utils/middlewares/auth')

// read users
router.get('/users/me', auth ,async (req, res)=>{
    try {
        res.send(req.user)
    } catch (error) {
        res.send(error)
    }
    
})

// read user by id
router.get('/users/:id', auth, async (req, res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send("User not found")
        }
        res.send(user)
    } catch(e){
        res.status(500).send("Internal server error")
    }
})

//update user
router.patch('/users/me', auth, async (req, res)=>{
    // this checks for the fields which can be updated
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'username']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try{
        updates.forEach((update)=>{
            req.user[update] = req.body[update]

        })
        await req.user.save()
        res.send(user)
    }catch(e){
        res.status(400).send()
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        await req.user.remove() //does same as above
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})