const express = require("express");
const router = express.Router();
const upload = require("../multer/multerConfig");

const {
    getPosts,
    getPostsByUser,
    uploadPost,
    putPost,
    deletePost
}= require("../controllers/postsController");


router.get("/all", getPosts)
router.get("/byuser/:userid", getPostsByUser);
router.post("/", upload.single("file"), uploadPost)
router.put("/", putPost)
router.delete("/:postId", deletePost)


module.exports = router