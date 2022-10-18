const express = require('express');
// add roueter function of express 
const router = express.Router();

const postsApi = require('../../../controller/api/v1/posts_api')

router.get('/',postsApi.index)


module.exports=router;

