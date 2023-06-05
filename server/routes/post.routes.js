const express = require('express');
const { setPosts, getPosts, editPosts, deletePost } = require("../controllers/post.controller");

const router = express.Router(); 


router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPosts);
router.delete("/:id", deletePost);

router.patch("/Like-post/:id", (req,res) => {

    res.json({ message: "Post Liké : id : " + req.params.id});
}
);

router.patch("/disLike-post/:id", (req,res) => {

    res.json({ message: "Post disLiké : id : " + req.params.id});
}
);

module.exports = router;