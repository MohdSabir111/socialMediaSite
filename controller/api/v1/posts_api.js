
const Post= require('../../../models/posts');
const Comment=require('../../../models/comment');

//api to find the post 
module.exports.index =async function(req , res){
    let posts = await  Post.find({})
    .populate('user') // used to populate the user which ref by the post
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    });

    return res.status(200).json({
        message : 'Lists of posts',
        posts : posts,
    })
}

// api to delete the posts 

module.exports.destroy = async function(req , res){
    //find the Post refer the id in string param
 try{
     let post = await Post.findById(req.params.id)
     // if(post.user == req.user.id){
         post.remove();
         await  Comment.deleteMany({post: req.params.id});
        // req.flash('success','Post and associated comments Deleted..!!')
        // return res.redirect('back');
        return res.json(200,{
            message : 'posts and associated comments deleted sucessfully'
        })
    //  }
    

 }catch(err){
 
     return res.json(500, {
        message: 'internal sever error',
     })
 }


}