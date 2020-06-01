// Post model/ Schema
const mongoose = require('mongoose')
const uuid = require('../utils/utils')

const postSchema = new mongoose.Schema({
    _id:{
        type: String,
        // unique: true,
        default: () => uuid.v1(),
    },
    user:{
        type: String,
        required: true,
        ref: 'User'
    },
    image:{
        type: Buffer,
    },
    likes:[
        {
            type: String
        }
    ],
    caption:{
        type: String,
        default: ""
    }

},{
    timestamps : true,
    versionKey: false,
    toJSON:{ virtuals:true },
    toObject: { virtuals: true }
})

// foreign key
postSchema.virtual('comments',{
    ref: 'Comments',
    localField : '_id',
    foreignField : 'post'
})



//like count
postSchema.methods.likeCount = async function(){
    const post = this
    const likeCount = post.likes.length
    return likeCount
}

// json data to be send
postSchema.methods.toJSON = function(){
    const post = this
    const postObject = post.toObject()

    delete postObject.likes
    delete postObject.updatedAt
    delete postObject.id

    

    return postObject
}




const Post = mongoose.model('Post', postSchema)
module.exports = Post