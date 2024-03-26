const blogServices = require("../services/blogService");

const postBlog = async (req,res) => {
    try {
        const {title,content} = req.body;
        console.log(title);
        const userId= req.user.id;
        console.log(userId);

        const data = await blogServices.postBlog({title,content,userId});
        console.log(data._id[1]);
res.status(201).json(data);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const updateBlog = async (req,res) => {
    try {
const updateData = req.body;
const {id} = req.params;
const blog = await blogServices.updateBlog(id,updateData);

if(!blog) {
    res.status(404).json({message : "blog not found"});
};

res.status(200).json(blog);

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};
const deleteBlog = async (req,res) => {
    try {
const {id} = req.params;
const success = await blogServices.deleteBlog(id);
if(!success) {
    res.status(404).json({message : "Blog not found"});
}

res.status(204).json({message:"Blog deleted"});

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const getAllBlog = async (req,res) => {
    try {

const blog = await blogServices.getAllBlog();
if(!blog) {
    res.status(404).json({message : "blog not found"});
}
res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const getByIdBlog = async (req,res) => {
    try {
const {id} = req.params;
const blog = await blogServices.getByIdBlog(id);

if(!blog) {
    res.status(404).json({message : "blog not found"});
}

res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};

module.exports ={postBlog,updateBlog,deleteBlog,getAllBlog,getByIdBlog};