var router = require('express').Router();
var loremIpsum = require('lorem-ipsum')
var _ = require('lodash');

var testPost = function (id) {

    function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return {
        id: id,
        title: loremIpsum({
            count: 5,
            units: 'words'
        }),
        body: loremIpsum({
            count: 5,
            units: 'paragraphs'
        }),
        publishDate: new Date(2015, randBetween(1, 12), randBetween(1, 28)),
        thumbnail: "/img/bugs/" + id + ".jpg"
    }

}

router.get('/', function (req, res) {


    var posts = [];

    for (var i = 0; i < 8; i++) {
        posts.push(testPost(i + 1));
    }

    res.json(posts);

});

router.get('/:postId', function (req, res) {


    setTimeout(function () {
        res.json(testPost(req.params.postId));
    }, 1000);
});

module.exports = router;