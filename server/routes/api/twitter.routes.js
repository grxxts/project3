const express = require("express");
const router = express.Router();

const axios = require('axios');
// const Todo = require('../../models/Todo')



router.get("/getTweets",(req, res) => {
    axios.get('https://api.twitter.com/1.1/search/tweets.json?q=from:auronplay',{headers:{ Authorization : "Bearer " + "AAAAAAAAAAAAAAAAAAAAAG7kBAEAAAAA6diAVaFdOdkMt7PwArjBm1PjXbo%3DPOlMvCOsRpHjJAeMOcB4MIUod58eek0ajeYum7dFtj1c9cacji"}})
    .then((listOfTweets)=>{
        res.json({tweets:listOfTweets.data})
    })
    .catch(err => console.log(err))
})



module.exports = router;