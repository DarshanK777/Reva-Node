// Comment model/ Schema
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
    }
},{
    timestamps : true,
    versionKey: false,
    toJSON:{ virtuals:true },
    toObject: { virtuals: true },
    id: false
})

// json data to be send
commentSchema.methods.toJSON = function(){
    const comment = this
    const commentObject = comment.toObject()

    delete commentObject.post
    delete commentObject.createdAt
    delete commentObject.updatedAt

    return commentObject
}



const Comment = mongoose.model('Comments', commentSchema)

module.exports = Comment