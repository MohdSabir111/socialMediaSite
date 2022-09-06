const express=require('express');
const router=express.Router();
const passport=require('passport');

const commentController=require('../controller/comments_controller');
console.log('==========================Comment routers ');

router.post('/create',passport.checkAuthentication,commentController.create);

module.exports=router;