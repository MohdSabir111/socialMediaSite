const express = require('express');
// add roueter function of express 
const router = express.Router();

router.use('/posts',require('./posts'))


module.exports=router;