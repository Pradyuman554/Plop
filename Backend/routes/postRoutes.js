import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.post('/', async(req,res)=>{  //Used for posting something in the data (that from where can we post)
    const{title, content} = req.body;
    const post = new Post({
        title, content
    });
    await post.save();
    res.status(201).json(post);
});

router.get('/', async(req,res)=>{   //Used for getting stuff from the database
    const posts = await Post.find({});
    res.json(posts);
});

export default router;
