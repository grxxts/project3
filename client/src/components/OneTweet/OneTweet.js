import React, { Component } from 'react'

export default class OneTweet extends Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            tweets: props.tweets
        };
    }

    render() {
        return (
            <div className="eachTweet">
                <div>
                    {/* <img className="tweetImg" src={this.props.data.statuses.image_url} /> */}
                </div>
                <div>
                    <h3>{this.props.data.user.screen_name}</h3>
                    <h2>{this.props.data.created_at}</h2>
                    <p><strong>Created by:</strong> {this.props.data.text}</p>
                </div>

            </div>
        )
    }
}
