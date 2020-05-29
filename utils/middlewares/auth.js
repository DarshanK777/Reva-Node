const jwt = require('jsonwebtoken')
require('dotenv/config')
const User = require('../../models/user')

const auth = async (req, res, next) =>{

    try{

        const token = req.header('Authorization').replace('Token ','')
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await User.findOne({ _id : decoded._id, 'tokens.token' : token })

        if(!user){
            throw new Error()
        }

        req.user = user
        next()
    }catch(err){
        res.status(401).send({
            'error' : 'Unauthorixed'
        })
    }
}

module.exports = auth