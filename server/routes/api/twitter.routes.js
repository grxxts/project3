const express = require("express");
const router = express.Router();

const axios = require('axios');



router.get("/getTweets/:searchStr",(req, res) => {
    let URL = 'https://api.twitter.com/1.1/search/tweets.json?q=from:' + req.params.searchStr


    
    axios.get(URL,{headers:{ Authorization : "Bearer " + `${process.env.TWITTER_KEY}`}})
    .then((listOfTweets)=>{
        res.json({tweets:listOfTweets.data})
    })
    .catch(err => console.log(err))
})



module.exports = router;