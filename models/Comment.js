const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    username :{
        type : mongoose.Schema.Types.String,
        required : true,
        ref: "User"
    },
    comment : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    blogId :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "Blog"
    }
},
{
    timestamps : true
});


const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;