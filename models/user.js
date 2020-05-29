// User DB Model

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const uuid = require('../utils/utils')
require('dotenv/config')
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    _id:{
        type: 'object',
        value: { type: 'Buffer' },
        default: () => uuid.v1(),
        unique: true
    },
    name: {
        type: String,
        unique: false,
        lowercase: true,
        trim: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        lowercase: false,
        required: true,
        unique: true
        // write a validate method here
    },
    // add dob
    email: {
        type : String,
        unique : true,
        lowercase : true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 7,
        trim: true,
    },
    avatar:{
        type: Buffer
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }]
    
})

// middleware for password hashing
userSchema.pre('save',async function(next){
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

// model method
userSchema.statics.findByCredentials = async (email, password)=>{
    // statics are called on Model
    const user = await User.findOne({ email })
    if(!user){
        throw Error ('Unable to find user')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
       throw new Error('incorrect credentials')
    }

    return user
}

// json data to be send
userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}


// instance method
userSchema.methods.generateAuthTokens =  async function(){
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token

}


const User = mongoose.model('User', userSchema)
module.exports = User