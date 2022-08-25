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
    }
});

const Post = mongoose.model('Post',postSchema);

module.exports = Post;