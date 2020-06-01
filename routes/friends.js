// handle following and follower
const Friends = require('../models/friendSys')
const express = require("express")
const router = express.Router()
const authMiddleware = require('../utils/middlewares/auth')

// adding friends and removing friends
router.post('/:id', authMiddleware, async (req, res)=>{
    try{

        const check = Friends.findOne({user_id : req.user._id, following_user_id: req.params.id})
        if(!check){
            const friends = new Friends({
                user_id : req.user_id,
                following_user_id : req.params.id
            })
            await friends.save()
            res.status(200).send('added friend')
        }

        Friends.deleteOne(check, function(err){
            if(err) console.log(err)
            console.log('succesfully deleted')
        })

    }catch(err){
        res.status(404).send()
    }
})

module.exports = router