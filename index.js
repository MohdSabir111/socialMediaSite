const express=require('express');
var app= express();
const db=require('./config/mongoose')
const expressLayouts = require('express-ejs-layouts');
//this is used to storing and working  on cookies
const cookieParser = require('cookie-parser');


//for passport session setup
const session = require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

//use for passportJs library 
// mongoStore, store the sessions cookies in the "DB"..this comes from documentations 
app.use(session({
    name : 'projSample',
    secret:'SabirIsHERE',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge:(1000*60*100)
    }
}))


app.use(passport.initialize());
app.use(passport.session());


//Ejs setup 
app.set('view engine', 'ejs')
app.set('views','./views')


// for worki
app.use(cookieParser());

//This is used to accept the data from the from Tags inside the req.body
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


