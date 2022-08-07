//we export this function so that routers used in the controller action
module.exports.profile = function(req , res ){
    return res.render('profile',{
        title:'profile',
        name:"Uvais Ahmad __sAbIR ansari",
        location:'Muzaffarnagar'
    })
}

module.exports.post=function(req,res){
    return res.render('post')
}