import React, { Component } from 'react'
import "./OneTweet.css"

export default class OneTweet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: props.tweets
            
        };
    }

    render() {
        return (


            <div className="eachTweet">
                <h5 className="twitter-tweetname" >@{this.props.data.user.screen_name}</h5>
                <h6 className="twitter-username">{this.props.data.user.name}</h6>
                <p className="twitter-created">{this.props.data.created_at}</p>
                <p className="twitter-text"> {this.props.data.text}</p>
            </div>


        )
    }
}
