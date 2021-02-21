const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");



router.post('/', function(req, res, next) {
    const name = req.body.name;
    const text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
});

router.get('/:id', function (req, res){
    console.log(req.params, 'req.params.id')
    const id = parseInt(req.params.id)
    const list = tweetBank.find( { id: id } );
    res.render('index',{tweets: list})
});


module.exports = router;