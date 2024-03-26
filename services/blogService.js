const Blog = require("../models/Blog");
const User = require("../models/User");

const postBlog = async ({title,content,userId}) => {
    try {
        const {username} = await User.findOne({_id : userId});
const blog = await Blog.create({title,content,userId,username});
return(blog);
    } catch (error) {
        throw error;
    }
};

const updateBlog = async (id,updateData) => {
    try {
const blog =await Blog.findOneAndUpdate(
    {_id:id},
    {$set : updateData},
    {new : true}
)

return blog;
    } catch (error) {
        throw error;
    }
};

const deleteBlog = async (id) => {
    try {
const blog = await Blog.findByIdAndDelete({_id : id})
return blog;
    } catch (error) {
        throw error;
    }
};

const getByIdBlog = async (id) => {
    try {
const blog = await Blog.findOne({_id : id});
return blog;
    } catch (error) {
        throw error;
    }
};

const getAllBlog = async () => {
    try {
const blog = await Blog.find({});
return blog;
    } catch (error) {
        throw error;
    }
};

module.exports ={postBlog,updateBlog,getAllBlog,getByIdBlog,deleteBlog}