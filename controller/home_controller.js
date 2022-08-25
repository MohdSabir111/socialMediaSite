const { render } = require('ejs');
const Post = require('../models/posts');


module.exports.home = function(req ,res ){
    Post.find({})
    .populate('user') // used to populate the user which ref by the post
    .exec(function(err , data){     // exec() is the callback function
        if(err){console.log('Error ',err);}
        return res.render('home' , {
            title:'Home Page',
            posts : data
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