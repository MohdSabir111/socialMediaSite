const express = require('express');
const passport = require('passport');
//This is used tto handle all routes
const router = express.Router();
const userCont = require('../controller/users_controller');

// This routes used to handle users profile url
router.get('/profile/:id',passport.checkAuthentication,userCont.profile);
router.post('/update/:id',passport.checkAuthentication,userCont.update);

router.get('/post',userCont.post);

//this is used to render the signup page only
router.get('/sign-up',userCont.signUp);

//this is used to render the signIn page only
router.get('/sign-in',userCont.signIn);

//Used to signuP TO CREATE user account
router.post('/create',userCont.create);

//This is used to signIn and This Auth Function check User Auth if Not it redirect to the SignIN PAge
router.post('/create-session' ,passport.authenticate('local' , {failureRedirect:'/users/sign-in'}) ,userCont.createSession);

router.get('/sign-out',userCont.destroySession);

module.exports = router;