// user auth middleware
const jwt = require('jsonwebtoken')
require('dotenv/config')
const User = require('../../models/user')

const auth = async (req, res, next) =>{
    // console.log(req.header("Authorization"))
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await User.findOne({ _id : decoded._id, 'tokens.token' : token })
         
        if(!user){
            throw new Error()
        }

        const userx = await user.populate('followCount').populate('followingCount').execPopulate()
        req.user = userx
        // console.log(users)
        next()
    }catch(err){
        res.status(401).send({
            'error' : 'Unauthorixed'
        })
    }
}

module.exports = auth