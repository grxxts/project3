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
                <p className="twitter-created">{this.props.data.created_at}</p>
                <p className="twitter-text"> {this.props.data.text}</p>
            </div>


        )
    }
}
