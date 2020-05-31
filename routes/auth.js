// handle authentication
const express = require('express')
const User = require('../models/user')
const router = express.Router()


router.post('/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password) // dev defined model function
        const token = await user.generateAuthToken() // dev defined model instance function
        res.status(200).send({ token })
     }catch(e){
        res.status(400).send()
     }

})

router.post('/register', async (req, res) =>{
    const user = new User(req.body)
    try{
       await user.save()
       const token = await user.generateAuthToken()
       res.status(201).send({token})
       
    }catch(err){
        res.status(400).send(err)
    }

})

// router.post('/users/logout', auth, async (req, res)=>{
//     try {
//         req.user.tokens = req.user.tokens.filter((token)=>{
//             return token.token !== req.token
//         })
//         await req.user.save()
//         res.send()
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })

// router.post('/users/logoutAll', auth, async (req, res)=>{
//     try {
//         req.user.tokens = []
//         await req.user.save()
//         res.send()
//     } catch (e) {
//         res.status(500).send(e)
// }}
// )


module.exports = router