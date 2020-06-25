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
        const imgPath = req.protocol + "://" + req.hostname + '/' + req.file.path;

        const post = new Post({
            user : req.user._id,
            image : imgPath,
            caption : req.body.caption
        })
        await post.save()
        res.status(201).send({'status' : 'success'})
    }catch(e){
        
        res.status(400).send(e.message)
    }
})

// get a post by id (irrelevant of user)
router.get('/:id', authMiddleware, async (req, res)=>{

    try{
        const post = await Post.findById(req.params.id)
        await post.populate({path: 'comments', // populating the comments in post
            select : 'post updatedAt comment ' // selecting the fields required to display
        }).execPopulate()
      
        if(!post){
            res.status(404).send('post not found')
        }
        res.send( post )
    }
    catch(e){
        res.status(500).send("Internal server error")
    }
})

// update a post
router.patch('/:id', authMiddleware, async (req, res) => {
    const updates = Object.keys(req.body)
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
            return res.status(404).send('no element to be deleted')
        }
        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

// post comments
router.post('/comment/:id', authMiddleware, async (req, res)=>{
    const post = await Post.findById(req.params.id) 
    try{
        const comment = new Comment({
            ...req.body,
            user: req.user._id,
            post: post

        })
        await comment.save()
        res.status(200).send('comment succesfull')
    }catch(err){
        res.status(400).send({error: err.message})
    }
})

// comment delete
router.delete('/comment/:id', authMiddleware, async(req, res)=>{
    try{
        await Comment.findOneAndDelete({_id: req.params.id, user: req.user})
        res.status(202).send({
            delete : 'succesfull'
        })
    }catch(err){
        res.status(400).send('Unauthorised access')
    }
})

// delete the comment by post owner
router.delete('/:pid/:id', authMiddleware, async(req, res)=>{
    try{
        const post = Post.findOne({_id:req.params.pid, user: req.user})
        if(!post){
            throw new Error("You Down Own the post")
        }
        Comment.findByIdAndDelete(req.params.id)
        res.status(202).send({
            delete : 'succesfull'
        })

    }catch(err){
        res.status(400).send({
            error: err.message
        })
    }
})
 
// like or unlike
router.post('/like/:id', authMiddleware, async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        const user_id = req.user._id

        if(post.likes.includes(user_id)){ // if liked then, unlike
            post.likes.pull(user_id)
            await post.save()
            res.send('deleted')
        }else{
            await (post.likes).push(req.user) // if not then, like
            await post.save()
            res.send('added')
        }

    }catch(err){
        res.status(500).send({error : err.message})
    }   
})

// get likes
router.get('/like/:id', authMiddleware, async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id)
        await post.populate('likes').execPopulate()
        res.status(200).send(post.likes)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router
