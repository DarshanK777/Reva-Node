// handle following and follower
const Friends = require('../models/friendSys')
const express = require("express")
const router = express.Router()
const authMiddleware = require('../utils/middlewares/auth')

// adding friends and removing friends
router.post('/:id', authMiddleware, async (req, res)=>{
    try{
        const check = await Friends.findOne({user_id : req.user._id, following_user_id: req.params.id})
        console.log(check)
        if(!check){
            const friends = new Friends({
                user_id : req.user,
                following_user_id : req.params.id
            })
            await friends.save()
            return res.status(200).send({'status' : 'added'})
        }

        Friends.deleteOne(check, function(err){
            if(err) console.log(err)
            console.log('deleted friend')
        })
        return res.send(
            {'status' : 'deleted'}
        )

    }catch(err){
        res.status(404).send()
    }
})

// get friend list
router.get('/', authMiddleware, async(req, res)=>{
    try{
        const followers = await  Friends.find({following_user_id : req.user, accepted: true}).select('-user_id')
        const following = await  Friends.find({user_id : req.user, accepted: true}).select('-following_user_id')

        res.send({
            followers,
            following
        })
        
    }catch(err){
        res.status(500).send('server problem')
    }
})

module.exports = router