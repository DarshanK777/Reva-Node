const mongoose = require('mongoose')
const uuid = require('../utils/utils')


const commentSchema = new mongoose.Schema({
    _id:{
        type: String,
        // unique: true,
        default: () => uuid.v1(),
    },
    post:{
        type: String,
        required: true,
        ref: 'Post'
    },
    user:{
        type: String,
        required: true,
        ref: 'User'
    },
    comment:{
        type: String,
        default: null
    }
},{
    timestamps : true,
    versionKey: false,
    toJSON:{ virtuals:true },
    toObject: { virtuals: true }
})


const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment