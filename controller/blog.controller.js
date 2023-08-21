const db = require('../model/index');

const Blog = db.blog;

// Post blog

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.userId;
    const blog = await Blog.create({ title, content, authorId: userId });
   return res.status(201).json(blog);
  } catch (error) {
    console.error('Error creating blog post:', error);
   return res.status(500).json({ error: 'Error creating blog post' });
  }
};
 //Blog Post By Id

exports.viewBlog = async (req,res)=>{
try {
    const id  = req.params.id;
    const read_blog = await Blog.findByPk(id);
    return res.status(200).json({message:'viewing blog post ',feedback:read_blog})
} catch (error) {
    console.error('Error creating blog post:', error);
      return res.status(500).json({error:' server error viewing blog post'}) 
}};

 //All Blogs Post 

exports.viewAllBlog = async (req,res)=>{
try {
    const read_blog = await Blog.findAll();
    return res.status(200).json({message:'viewing all Blogs Post',feedback:read_blog})
} catch (error) {
      return res.status(500).json({error:' server error viewing all Blog Post'}) 
}};

//Update a blog post
exports.updateBlog =  async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const userId = req.user.userId;
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog post not found' });
      
    }

    if (blog.authorId !== userId) {
      return res.status(403).json({ error: 'You are not authorized to edit this blog post' });
      
    }

    const updatedBlog = await blog.update({ title, content });
    res.json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog post:', error);
   return res.status(500).json({ error: 'Error updating blog post' });
  }
};



//Delete Blog Post
exports.deleteBlog = async (req,res)=>{
    try {
const id  = req.params.id;
const userId = req.user.userId;
    const blog = await Blog.findByPk(id);
    if(!blog) {
        return res.status(404).json({error:'Blog post ont found'});
    }
    if(blog.authorId !== userId) {
        return res.status(403).json({error:'Unauthorized credential'});
    }
await blog.destroy();
return res.status(200).json({message:'Blog post deleted'})
} catch (error) {
     console.error('server error update blog post:', error);
     return res.status(500).json({ error:'internal error deleting blog post'})   
}
};