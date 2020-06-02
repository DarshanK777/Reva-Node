// Follow System model/Schema
const mongoose = require('mongoose')
const uuid = require('../utils/utils')

const friendSys = mongoose.Schema({
    _id:{
        type: String,
        // unique: true,
        default: () => uuid.v1(),
    },
    user_id: {
        type: String,
        ref: 'User'
    },
    following_user_id: {
        type: String,
        ref: 'User'
    },
    accepted: {
        type: Boolean,
        default : true
    }

},{
    timestamps : true,
    id: false,

})

// get followers
friendSys.methods.getFollowers = async function(user){
    console.log('this')
    const followers = await Friends.find({following_user_id : user, accepted: true}).select('-user_id')
    if(!followers){
        return []
    }
    return followers
}

// get followings
friendSys.methods.getFollowing = async function(user){
    const following = await Friends.find({user_id : user, accepted: true}).select('-following_user_id')
    if(!following){
        return []
    }
    return following
}

friendSys.methods.toJSON = function(){
    const friends = this
    const friendsObject = friends.toObject() 
    delete friendsObject.updatedAt

    return friendsObject
}



const Friends = mongoose.model('Friends', friendSys)
module.exports = Friends