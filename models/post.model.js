const mongoose= require("mongoose");

const postSchema= new mongoose.Schema({
    topic:{
        type:String,
        required:[true,"topic is required"],
    },
    question:{
        type:String,
        required:[true,"question is required"],
    },
    answer:{
        type:String,
        required:[true,"answer is required"],
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
})

const Post= mongoose.model("Post",postSchema);
module.exports=Post;