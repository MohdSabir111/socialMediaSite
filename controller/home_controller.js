const { render } = require('ejs');
const Post = require('../models/posts');
const User= require('../models/users');

//Using async await

module.exports.home = async function(req ,res ){

    try{
        let posts = await  Post.find({})
        .populate('user') // used to populate the user which ref by the post
        .populate({
            path:'comments',
            populate:{
                path:'user'
            }
        });
    
        let users = await User.find({});
        return res.render('home' , {
            title:'Home Page',
            posts : posts,
            all_users : users
        });

    }catch(err){
        console.log("Error",err);
        return;

    }

}



// module.exports.home = function(req ,res ){
//     Post.find({})
//     .populate('user') // used to populate the user which ref by the post
//     .populate({
//         path:'comments',
//         populate:{
//             path:'user'
//         }
//     })
//     .exec(function(err , data){     // exec() is the callback function

//          User.find({}, function(err,users){
//             if(err){console.log('Error ',err);}
//         return res.render('home' , {
//             title:'Home Page',
//             posts : data,
//             all_users : users

//         })
        
//         })
//     })
// }





