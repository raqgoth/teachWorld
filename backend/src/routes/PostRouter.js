const {Router} = require('express');
const router   = Router();

const { getPosts, getPostById, createPost, updatePost, deletePost } = require ('../controllers/PostController');

router.route('/')
.get(getPosts)
.post(createPost);

router.route('/:id')
.get(getPostById)
.put(updatePost)
.delete(deletePost);

module.exports = router;
