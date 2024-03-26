const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const blogController = require("../controllers/blogController");
const authenticateToken = require("../middleware/authenticateToken")


//Blogs
router.post("/", authenticateToken, blogController.postBlog);
router.put("/:id", authenticateToken, blogController.updateBlog);
router.delete("/:id", authenticateToken, blogController.deleteBlog);
// router.get("/:id", authenticateToken, blogController.getByIdBlog);
router.get("/", authenticateToken, blogController.getAllBlog);


//Comments
router.post("/:id/comment", authenticateToken, commentController.postComment);
// router.put("/:blogId/comment/:commentId", authenticateToken, commentController.updateComment);
// router.delete("/:blogId/comment/:commentId", authenticateToken, commentController.deleteComment);
router.get("/all/comment", authenticateToken, commentController.getAllComment);
// router.get("/:id/comment", authenticateToken, commentController.getByIdComment);



module.exports = router;