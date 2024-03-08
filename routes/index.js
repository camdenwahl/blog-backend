var express = require('express');
var router = express.Router();
const multer = require("multer");
const upload = multer();

const userController = require('../controllers/userController');
const blogController = require('../controllers/blogController');
const commentController = require('../controllers/commentController');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });

// });

router.get('/test', userController.create_user);


router.post('/blogs', upload.none(), blogController.create_blog);

router.get('/blogs', blogController.get_blogs);

router.put('/', blogController.update_blog);

router.delete('/', blogController.delete_blog)

router.get('/readcomments', blogController.get_comments);

module.exports = router;
