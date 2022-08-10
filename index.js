const express=require('express');
var app= express();
const db=require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts');
 
app.set('view engine', 'ejs')
app.set('views','./views')


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


