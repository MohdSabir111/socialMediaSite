const Comment=require('../models/comment');
const Post=require('../models/posts');

module.exports.create=function(req,res){
    //find the posts in db
    Post.findById(req.body.post,function(err,post){
        console.log(req.body.post)
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err,Comment){
                //handle the err
                console.log(Comment)
                post.comments.push(Comment);
                post.save();
                res.redirect('/');

            }
            )
        }
    })
}