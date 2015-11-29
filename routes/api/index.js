var router = require('express').Router();

var posts = require('./posts');

router.use('/posts', posts);

module.exports = router;