const express = require('express');
//This is used tto handle all routes
const router = express.Router();
const userCont = require('../controller/users_controller');

// This routes used to handle users profile url
router.get('/profile',userCont.profile);

router.get('/post',userCont.post);

//this is used to render the signup page only
router.get('/sign-up',userCont.signUp);

//this is used to render the signIn page only
router.get('/sign-in',userCont.signIn);

router.post('/create',userCont.create);
module.exports = router;