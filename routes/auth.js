const router = require('express').Router();
const authController = require('../controllers/auth');

// Register
router.post('/register', authController.postRegister);

// Login
router.post('/login', authController.postLogin);

module.exports = router;
