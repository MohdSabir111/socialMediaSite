const express=require('express');
var app= express();
const expressLayouts = require('express-ejs-layouts');
 
app.set('view engine', 'ejs')
app.set('views','./views')

//This use t o set the layouts for all EJS files and Always define before routes m/w
app.use(expressLayouts);

//handle all requestes comes from '/' path
app.use('/' ,require('./routers'));

app.listen(8000,function(error){
    if(error){console.log(error);}
    console.log("server is running for Sample Project");
})


