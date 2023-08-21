const express = require('express');
router = express.Router();
const { Auth } = require("../middleware/auth")
const {createBlog,updateBlog,viewBlog,viewAllBlog,deleteBlog} = require("../controller/blog.controller");


//post
router.post('/blog',Auth,createBlog);

//Get
router.get('/blog/:id', viewBlog);
router.get('/blogs', viewAllBlog);

//Put
router.put('/blog/:id',Auth,updateBlog);

//Delete
router.delete('/blog/:id',Auth,deleteBlog);

module.exports = router;