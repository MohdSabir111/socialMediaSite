//we export this function so that routers used in the controller action
module.exports.profile = function(req , res ){
    return res.render('profile',{
        title:'profile',
        name:"Uvais Ahmad __SAbIR ansari",
        location:'Muzaffarnagar'
    })
}

module.exports.post=function(req,res){
    return res.render('post',{
        title:'posts'
    })
}

module.exports.signUp=function(req , res ){
    return res.render('sign_up',{
        title:'Sign Up'
    });
}

module.exports.signIn=function(req , res ){
    return res.render('sign_in',{
        title:'Sign In'
    });
}