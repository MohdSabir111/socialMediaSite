const express=require('express');
var app= express();
const db=require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts');
//this is used to storing and working  on cookies
const cookieParser = require('cookie-parser');
 
app.set('view engine', 'ejs')
app.set('views','./views')

app.use(cookieParser());

//This is used to accept the data from the from Tags
app.use(express.urlencoded());


//This is use to set the layouts for all EJS files and Always define before routes m/w
app.use(expressLayouts);

//using the static files for frontEnd like css js
app.use(express.static('assets'));

//handle all requestes comes from '/' path
app.use('/' ,require('./routers'));

app.listen(8000,function(error){
    if(error){console.log(error);}
    console.log("server is running for Sample Project");
})


