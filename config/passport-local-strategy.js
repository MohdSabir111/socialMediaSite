const { Passport } = require('passport');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/users');

//This is A middleware
passport.use( new LocalStrategy({
    usernameField : 'email'
} ,
//Check user Auth or Not
function ( email , password , done ){
    //find User is Auth 
    User.findOne({ email : email } , function(err , user){

        //if Error Occur Then handle it
        if(err){ return done(err); }

        //if Not user || user Password not matched the entered password
        if( !user || user.password != password ){
            return done(null , false);
        }

        //USER FOUND
        return done(null , user);
    });
} 
))

//This is used to store token at client side in encrpted form
passport.serializeUser( function ( user  , done ){

    return done(null , user);
})

//This is used to decrypt token from client side to sending request server side
passport.deserializeUser( function ( id , done){
    //first Check useerd comes with ID is Auth ?
    User.findById( id , function ( err , user){
        if(err){ done(err);}
        return done(null , user);
    })
})

// used for user is authenticated

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
return res.redirect('/users/sign-in')
}


//set authenticated user values

passport.setAuthenticatedUser=function(req,res, next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookies
        //and locals variable only used to render the views
       
        res.locals.user=req.user;
    }
// after setting next() here req pass to the  next Transfer
next();
}