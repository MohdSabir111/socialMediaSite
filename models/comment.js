const mongoose=require('mongoose');
const User = require('./users');

const commentSchema= new mongoose.Schema({
content:{
    type : String,
    required : true
}, // comment belong to a user 
 user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
 },

 post:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Post'
 }


});

const Comment=mongoose.model('Comment',commentSchema);

module.exports=Comment;