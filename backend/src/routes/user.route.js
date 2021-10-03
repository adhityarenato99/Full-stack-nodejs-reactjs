const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all user
router.get('/', userController.getUserList);

// get user by name
router.get('/searchRecord/:firstname', userController.getUserByName);

module.exports = router;