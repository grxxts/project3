import React, { Component } from 'react'
import Axios from 'axios';
import OneVideoYouTube from '../OneVideoYouTube/OneVideoYouTube';

export default class YouTubeContainer extends Component {

    constructor() {
        super();

        this.state = {
            yVideosId: "",
            channelId: "UCyQqzYXQBUWgBTn4pw_fFSQ",
            channelTitle: "",
            loading: false,

        };
    }

    componentDidMount() {

        Axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCky9oUUhBP7y7UXa8Dt0gu4raJjR9GwQ0&channelId=${this.state.channelId}&part=snippet`)

            .then(channelId => {
                const videoId = channelId.data.items[0].id.videoId
                const channelTitle = channelId.data.items[0].snippet.channelTitle
                console.log(videoId, channelTitle)

                this.setState({
                    ...this.state,
                    loading: true,
                    yVideosId: videoId,
                    channelTitle: channelTitle 
                })

                console.log(this.state)
            }
            )
            .then(() => { return Axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCky9oUUhBP7y7UXa8Dt0gu4raJjR9GwQ0&channelId=UCyQqzYXQBUWgBTn4pw_fFSQ&part=snippet") })
            .then(payload => {
                // console.log(`payload${payload}`)
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.yVideos)
        return (
            <React.Fragment>
                <h3>YouTube Displayer</h3>
                <ul className="yVideosList">
                    <p>{this.state.yVideos}</p>
                    
                </ul>
            </React.Fragment>
        )
    }
}


