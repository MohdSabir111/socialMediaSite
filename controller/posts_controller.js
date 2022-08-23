const Post = require('../models/posts');
const { post } = require('./users_controller');

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