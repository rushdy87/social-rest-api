const router = require('express').Router();
const postsController = require('../controllers/posts');

// Create a post
router.post('/', postsController.createPost);

// Update a post
router.put('/:id', postsController.updatePost);

// Delete a post
router.delete('/:id', postsController.deletePost);

// Like a post
router.put('/:id/like', postsController.likePost);

// get a post
router.get('/:id', postsController.getPost);

// get timeline (all posts for following)
router.get('/timeline/all', postsController.getTimelinePosts);

module.exports = router;
