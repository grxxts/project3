const express = require("express");
const router = express.Router();

const axios = require('axios');
// const Todo = require('../../models/Todo')



router.get("/getTweets",(req, res) => {
    axios.get('https://api.twitter.com/1.1/search/tweets.json?q=from:auronplay',{headers:{ Authorization : "Bearer " + `${process.env.TWITTER_KEY}`}})
    .then((listOfTweets)=>{
        res.json({tweets:listOfTweets.data})
    })
    .catch(err => console.log(err))
})



module.exports = router;