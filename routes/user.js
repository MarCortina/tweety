const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");

router.get('/:name', function(req, res) {
    const name = req.params.name;
    const list = tweetBank.find( { name: name } );
    res.render( 'index', {tweets: list, showForm: true, userName : name} );
  });

  module.exports = router;