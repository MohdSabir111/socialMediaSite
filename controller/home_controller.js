const { render } = require('ejs');
const Post = require('../models/posts');
const User= require('../models/users');



module.exports.home = function(req ,res ){
    Post.find({})
    .populate('user') // used to populate the user which ref by the post
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err , data){     // exec() is the callback function

         User.find({}, function(err,users){
            if(err){console.log('Error ',err);}
        return res.render('home' , {
            title:'Home Page',
            posts : data,
            all_users : users

        })
        
        })
    })
}





// function (err , data){
//     if(err){ console.log('Error ',err);}
//     return res.render('home' , {
//         title:'Home Page',
//         posts : data
//     })
// })