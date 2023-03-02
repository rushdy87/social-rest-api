const router = require('express').Router();
const postsController = require('../controllers/posts');

// Create a post
router.post('/', postsController.createPost);

// Update a post
router.put('/:id', postsController.updatePost);

// Delete a post
router.delete('/:id', postsController.deletePost);
// Like a post

// get a post

// get timeline (all posts for following)

module.exports = router;
