const { render } = require('ejs');
const Post = require('../models/posts');


module.exports.home = function(req ,res ){
    Post.find({})
    .populate('user')
    .exec(function(err , data){
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