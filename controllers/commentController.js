const commentServices = require("../services/commentService");


const postComment = async (req,res) => {
    try {
const {comment} = req.body;
const userId = req.user.id;

const blogId = req.params.id;
const createComment = await commentServices.postComment({
    comment,userId,blogId
})

res.status(201).json(createComment);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const updateComment = async (req,res) => {
    try {
const {blogId,commentId} = req.params;
const userId =req.user.id;
const commentData = req.body;
const comment = await commentServices.updateComment({userId,commentId,blogId,commentData});
if(!comment) {
    res.status(404).json({message : "Comment not found"});
}

res.status(200).json(comment);

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};
const deleteComment = async (req,res) => {
    try {
        const {blogId,commentId} = req.params;
        const userId =req.user.id;
        const success = await commentServices.deleteComment({userId,commentId,blogId});
        if(!success) {
            res.status(404).json({message : "Comment not found."})
        }

        res.status(204).json({message : "Comment deleted"});

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const getAllComment = async (req,res) => {
    try {
        
        const comment = await commentServices.getAllComment();
        if(!comment) {
            res.status(404).json({message : "comments not found"});
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

const getByIdComment = async (req,res) => {
    try {
const blogId = req.params.id;
const userId = req.user.id;
const comment = await commentServices.getByIdComment({userId,blogId});
        if(!comment) {
            res.status(404).json({message : "Comment not found."})
        }

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
};

module.exports ={postComment,deleteComment,updateComment,getAllComment,getByIdComment};