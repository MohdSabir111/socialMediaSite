const User = require('../models/users');

//we export this function so that routers used in the controller action
module.exports.profile = function(req , res ){
    return res.render('profile',{
        title:'profile',
        name:"Uvais Ahmad __SAbIR ansari",
        location:'Muzaffarnagar'
    })
}

module.exports.post=function(req,res){
    return res.render('post',{
        title:'posts'
    })
}

module.exports.signUp=function(req , res ){
    return res.render('sign_up',{
        title:'Sign Up'
    });
}

module.exports.signIn=function(req , res ){
    return res.render('sign_in',{
        title:'Sign In'
    });
}

module.exports.create = function(req , res ){
    //if pass and c-pass not matched
    if(req.body.password != req.body.c_password){
        return res.redirect('back');
    }

    //Check User of given is already exist ?
    User.findOne( { email : req.body.email } , function(err , user){
        if(err){ console.log("Error , While Finding the data"); }
        
        if(!user){
            //store new details of user
            User.create(req.body , function( err , user){
                if(err){ console.log('Error occur While storing Data');}
                return res.redirect('/');
            });
        }
        else{
            res.redirect('/users/sign-in');
        }
    })
}

//tHIS module used to create  session after successfully SignIn
module.exports.createSession = function( req ,res ){
    //todo Later
    console.log('Our session is Created and render to hOME')
    return res.redirect('/');
}

module.exports.destroySession = function (req , res){
    
    req.logout(function(err){
        if(err){ console.log('Error Occur whhile logout ',err); return next(err);}
        console.log('SIGN oUT ');
        return res.redirect('/');

    });
}