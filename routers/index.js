const express = require('express');
// add roueter function of express 
const router = express.Router();

//add controller File in Homecont
const homeCont = require('../controller/home_controller');



//here we use the HomeCont function which is exported 
router.get('/',homeCont.home);

//Now if routes comes with '/users' path then this routes handle by the 'users.js' routers file
router.use('/users' , require('./users'));  //use()..its a middle ware

router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));

router.use('/api',require('./api'));


//Thisis  require to export so  that server can use it 'router'
module.exports = router;