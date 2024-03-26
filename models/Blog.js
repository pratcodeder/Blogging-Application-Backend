const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true
    },
    username :{
        type : mongoose.Schema.Types.String,
        required : true,
        ref: "User"
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
},
{
    timestamps:true
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;