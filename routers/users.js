const express = require('express');
//This is used tto handle all routes
const router = express.Router();
const userCont = require('../controller/users_controller');

// This routes used to handle users profile url
router.get('/profile',userCont.profile);
router.get('/post',userCont.post);

module.exports = router;