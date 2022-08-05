const express=require('express');
var app= express();


app.use('/' ,require('./routers'));


app.listen(8000,function(error){
    if(error){console.log(error);}
    console.log("server is running for Sample Project");
})