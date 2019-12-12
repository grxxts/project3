import React, { Component } from 'react'
import "./TwitterContainer.css"
import OneTweet from '../OneTweet/OneTweet';
import { Link } from "react-router-dom";
import Axios from 'axios';

export default class TwitterContainer extends Component {

    constructor() {
        super();

        this.state = {
            tweets: [],
            loading: true,
            
        };
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/api/twitter/getTweets")
            .then(tweets => {
                // console.log(tweets)
                this.setState({
                    tweets: tweets.data.tweets.statuses,
                    loading: false
                })

            }
            )
            .catch(err => console.log(err))

    }



    render() {
        // console.log(this.state.tweets.tweets)
        // console.log(this.state.loading)
        return (
            <React.Fragment>
                <h3>Latest Tweets</h3>
                <ul className="tweetsList">
                    {this.state.tweets.map((tweet, idx) => {
                        return (
                            <OneTweet key={idx} data={tweet}></OneTweet>
                        );
                    })}
                </ul>
            </React.Fragment>
        )
    }
}
