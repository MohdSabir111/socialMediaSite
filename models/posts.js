const mongoose = require('mongoose');

const postSchema =  mongoose.Schema({
    content : {
        type:String,
        required : true
    },
    //we refrencing the user who created the post
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //include the arry of ids of all comments in the Post Schema itself
    comments : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;