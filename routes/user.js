// handle user data / updation
const express = require('express')
const User = require('../models/user')
const router = express.Router()
const authMiddleware = require('../utils/middlewares/auth')
const multer = require('multer')



// read users
router.get('/me', authMiddleware ,async (req, res)=>{
    try {
        
        res.send(req.user)
    } catch (error) {
        res.send(error)
    }
    
})

// read user by id
router.get('/:id', authMiddleware, async (req, res)=>{
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
router.patch('/me', authMiddleware, async (req, res)=>{
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

// delete user
router.delete('/me', authMiddleware, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.user._id)

        await req.user.remove() //does same as above
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


// defining multer
const avatar = multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please Upload a proper image'))
        }

        cb(undefined, true)
    }
})

// avatar upload
router.post('/me/avatar', authMiddleware, avatar.single('avatar'), async  (req, res)=>{
    const buffer = await sharp(req.file.buffer).resize({
        width: 250,
        height: 250
    }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}, (err, req, res, next)=>{
    res.status(400).send({error : err.message})
})

// avataar delete
router.delete('/me/avatar', authMiddleware, avatar.single('avatar'), async  (req, res)=>{
    req.user.avatar = undefined
    await req.user.save()
    res.send()
}, (err, req, res, next)=>{
    res.status(400).send({error : err.message})
})

// avataar get
router.get('/:id/avataar', authMiddleware, async  (req, res)=>{
    try{
        const user  = await User.findById(req.params.id)
        if(!user || !user.avatar){
            throw new Error('no image Found')
        }

        res.set('Content-Type', 'image/png')
        res.send(user.avatar)

    }catch(err){
        res.status(404).send()
    }
})

module.exports = router