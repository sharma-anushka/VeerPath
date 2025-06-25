const express = require('express');
const router = express.Router();
const Community = require('../models/community.model');
const { addMessage, getMessages } = require('../controllers/community.controller');
const { verifyToken } = require('../middleware/verify_token');

router.post('/add-message',verifyToken, addMessage);
router.get('/get-messages',verifyToken, getMessages);

module.exports = router;