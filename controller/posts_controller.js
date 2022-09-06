const Post = require('../models/posts')
const User =require('../models/users')
module.exports.create = function(req , res ){

    Post.create({
        content : req.body.content,
        user:req.user._id
    },function( err , post){
        if(err){ console.log('Error occur While storing Data');}
        console.log(post);
        return res.redirect('back');
    });
}

//Method to delete a post
module.exports.destroy = function(req , res){
    
    //find the Post refer the id in string param
    Post.findById(req.params.id,function(err,post){
        if(post.user == req.user.id){
            post.remove();
            return res.redirect('back');
        }
        else{
            return res.redirect('back');
        }

     });
  
   
}