const Comment = require("../models/Comment");
const User = require("../models/User");


const postComment = async ({comment,userId,blogId}) => {
    try {
        const {username} = await User.findOne({_id : userId});
        // console.log(username);
const commentpost = await Comment.create({username,comment,userId,blogId});

return commentpost;
    } catch (error) {
        throw error;
    }
};

const updateComment = async (updatComment) => {
    try {
const comment = await Comment.findOneAndUpdate(
    {
     _id: updatComment.commentId,   
     userId:updatComment.userId,
     blogId:updatComment.blogId,
    },
    {$set : updatComment.commentData},
    {new : true}
)
return comment;
    } catch (error) {
        throw error;
    }
};

const deleteComment = async ({userId,commentId,blogId}) => {
    try {
        const comment = await Comment.findOneAndDelete(
            {
                _id : commentId,
                userId:userId,
                blogId : blogId,
            }
        )
        
        return comment;
    } catch (error) {
        throw error;
    }
};

const getByIdComment = async ({userId,blogId}) => {
    try {
        const comment = await Comment.find(
            {
               
                userId:userId,
                blogId : blogId,
            }
        )
        
        return comment;
    } catch (error) {
        throw error;
    }
};

const getAllComment = async () => {
    try {
        
        const comment = await Comment.find({});
        return comment;
    } catch (error) {
        throw error;
    }
};

module.exports ={postComment,updateComment,deleteComment,getAllComment,getByIdComment}