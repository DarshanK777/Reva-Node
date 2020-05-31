// handles post(content) submission
const express = require('express')
const Post = require('../models/post')
const Comment = require('../models/comment')
const router = express.Router()
const authMiddleware = require('../utils/middlewares/auth')
const multer = require('multer')
const path = require('path')

// setting storage engine for multer
const storage = multer.diskStorage({
    destination: './images',
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

// init multer
const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please Upload a proper image'))
        }
        cb(undefined, true)
    }
}).single('postImage')

// create a post
router.post('/', upload, authMiddleware, async (req, res)=>{
    try{
        if(!req.file){
            throw new Error("please upload a image")
            }
        const post = new Post({
            user : req.user._id,
            image : req.file.path,
            caption : req.body.caption
        })
        await post.save()
        res.status(201).send('post created')
    }catch(e){
        console.log(e)
        res.status(400).send(e.message)
    }
})

// get all posts by user
router.get('/', authMiddleware, async(req, res)=>{
    try{
        await req.user.populate({
            path : 'posts',
            options : {
                limit : parseInt(req.query.limit), // pagination
                skip : parseInt(req.query.skip), // pagination
                sort: { // sort order
                    createdAt: -1 // order by
                }
            }
        }).execPopulate()
        res.send(req.user.posts)
    }catch(e){
        res.status(500).send()
    }
})

// get a post by id (irrelevant of user)
router.get('/:id', authMiddleware, async (req, res)=>{

    try{
        const post = await Post.findById(req.params.id)
        post.populate('comments').execPopulate()
        if(!post){
            res.status(404).send('post not found')
        }
        res.send(post)
    }
    catch(e){
        res.status(500).send("Internal server error")
    }
})


// update a post
router.patch('/:id', authMiddleware, async (req, res) => {
    const updates = Object.keys(req.body)
    console.log(req.body)
    const allowedUpdates = ['caption']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const post = await Post.findOne({ _id: req.params.id, user: req.user._id })
        if (!post) {
            return res.status(404).send()
        }
        updates.forEach((update)=> post[update] = req.body[update])
        await post.save()
        res.send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

// delete a post
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id, user: req.user._id })
        if (!post) {
            res.status(404).send()
        }
        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})


// get comments
router.post('/:id', authMiddleware, async (req, res)=>{
    const post = Post.findById(req.params.id) 
    try{
        const comment = new Comment({
            ...req.body,
            user: req.user,
            post,

        })
        await comment.save()
        res.status(200).send('comment succesfull')
    }catch(err){
        res.status(400).send({error: err.message})
    }
})


module.exports = router
