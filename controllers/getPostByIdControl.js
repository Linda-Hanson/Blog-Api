const blogPost = require('../models/blogPostDB')

module.exports = async(req,res)=>{
   // sending back the data for each post blog
   const id = req.params.id
   const blogposts = await blogPost.findById(id)
   if(blogposts.readingCount == null){
   
      console.log( blogposts.readingCount = parseInt(1))
      blogposts.save()
     return
   }
    blogposts.readingCount ++;
    blogposts.save()
    res.status(200)
   res.render('post',{
     blogposts
   })
}