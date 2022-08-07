const express = require('express');

const router = express.Router();

const homeCont = require('../controller/homeController');

console.log("Router is connected to the main Index file");

router.get('/',homeCont.home);

router.use('/users' , require('./users'));

module.exports = router;