const Post = require('../models/posts');
const User =require('../models/users');
const Comment = require('../models/comment');


module.exports.create =  async function(req , res ){
    try{

        await Post.create({
            content : req.body.content,
            user:req.user._id
        });
        req.flash('success','Post Published');
        return res.redirect('back');
    

    }catch(err){
        req.flash("error",err);
        return res.redirect('back');
    }

   
}

//Method to delete a post
     module.exports.destroy = async function(req , res){
       //find the Post refer the id in string param
    try{
        let post = await Post.findById(req.params.id)
         if(post.user == req.user.id){
            post.remove();
            await  Comment.deleteMany({post: req.params.id});
            req.flash('success','Post and associated comments Deleted..!!')
            return res.redirect('back');
        }
        else{
            req.flash('error','You can not delete this post');
            return res.redirect('back');
        }

    }catch(err){
        req.flash("error",err);
        res.redirect('back');
    }
 
   
}