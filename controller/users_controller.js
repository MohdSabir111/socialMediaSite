const { render } = require('ejs');
const User = require('../models/users');

//we export this function so that routers used in the controller action
module.exports.profile = function(req , res ){
    console.log(req.cookies.user_id);
    //check users is Auth or not
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
        if(err){console.log("erorr to find the data in profile page",err);}
        return res.render('profile',{
            title:'Profile',
            obj:user
        })

        })
    }
    else{
        return res.redirect('/users/sign-in')
    }
    
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

//Get the signUp data
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
    //Find user
    User.findOne({email : req.body.email } , function( err , user ){
        
        //handle the error
        if(err){ console.log('Error Finding user',err);}

        console.log(user);
        //is user Exist
        if(user){
            //Now check Password
            if(user.password != req.body.password){
                return res.redirect('back');
            }
                //user found 

            // create cookie and redirect to profile page
            res.cookie('user_id',user._id);
          return   res.redirect('/users/profile')
          
        }
        else{
            return res.redirect('back');
        }
    })
}

module.exports.signOut = function (req ,  res){
    res.clearCookie('user_id');
    return res.redirect('/');
}