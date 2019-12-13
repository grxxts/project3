import React, { Component } from 'react'
import "./OneTweet.css"

export default class OneTweet extends Component {

    constructor(props) {
        super(props);

        // console.log(props);
        this.state = {
            tweets: props.tweets
            
        };
    }

    render() {
        return (


            <div className="eachTweet">
                <h5>@{this.props.data.user.screen_name}</h5>
                <h6>{this.props.data.user.name}</h6>
                <p>{this.props.data.created_at}</p>
                <p> {this.props.data.text}</p>
            </div>


        )
    }
}
