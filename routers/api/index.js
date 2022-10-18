const express = require('express');
// add roueter function of express 
const router = express.Router();

router.use('/v1',require('./v1'))

module.exports=router;