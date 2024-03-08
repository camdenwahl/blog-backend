var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();

const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');



router.get('/comment', commentController.get_comment);

router.post('/comment', upload.none(), commentController.create_comment);

router.put('/comment', commentController.update_comment);

router.delete('/comment', commentController.delete_comment);


module.exports = router;
