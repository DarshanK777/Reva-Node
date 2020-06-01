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
    timestamp : true
})


const Friends = mongoose.model('Friends', friendSys)
module.exports = Friends