const express = require("express");
const router = express.Router();
const tweetBank = require("../tweetBank");
const tweetsRoutes = require('./tweets');
const userRoutes = require('./user')



router.get('/',(req, res, next)=>{
    let tweets = tweetBank.list();
    res.render('index', {tweets : tweets, showForm: true})
    console.log("esstas en router.get barrita")
    
});

router.use('/users',userRoutes);
router.use('/tweets',tweetsRoutes);


module.exports = router;

