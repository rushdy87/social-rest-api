const router = require('express').Router();
const userController = require('../controllers/users');

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

// Get a user
router.get('/:id', userController.getUser);

// Follow a user
router.put('/:id/follow', userController.putFollow);

// Unfollow a user
router.put('/:id/unfollow', userController.putUnfollow);

module.exports = router;
