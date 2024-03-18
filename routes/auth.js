const express = require('express')
const register = require('../controller/register');
const login = require('../controller/login');
const validateLinkedInToken = require('../middleware/authMiddleware');
const checkToken = require('../controller/checktoken');
const router = express.Router();

router.post('/register',validateLinkedInToken, register);
router.post('/login', login);
router.get('/verifytoken', checkToken);
  
module.exports = router;
