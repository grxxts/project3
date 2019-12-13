import React, { Component } from 'react'
import "./TwitterContainer.css"
import OneTweet from '../OneTweet/OneTweet';
import { Link } from "react-router-dom";
import Axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

export default class TwitterContainer extends Component {

    constructor() {
        super();

        this.state = {
            tweets: [],
            name: "",
            screenname: "",
            loading: true,

        };
    }



    handlerTitle = (tweets) => {
        console.log(tweets)
        this.setState({
            ...this.state,
            tweetsSearch: tweets
        
        }, () => {
            this.petisPutaMadre()
        })
    }


    componentDidMount() {
        this.petisPutaMadre()

    }


    petisPutaMadre = () => {
        Axios.get("http://localhost:3001/api/twitter/getTweets/" + this.state.tweetsSearch)

            .then(tweets => {
          console.log(tweets.data.tweets.statuses)

                this.setState({
                    ...this.state,
                    tweets: tweets.data.tweets.statuses,
                    loading: false
                })  

            }
            )
            .catch(err => console.log(err))

    }




    render() {
        console.log(this.state.tweets.tweets)
        console.log(this.state.loading)
        return (
            <React.Fragment>
                <h3>Latest Tweets</h3>
                <ul className="tweetsList">
                    <SearchBar search={(e) => this.handlerTitle(e)}></SearchBar>
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
