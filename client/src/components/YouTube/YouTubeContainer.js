import React, { Component } from 'react'
import Axios from 'axios';
import DisplayerYT from '../DisplayerYT/DisplayerYT'

export default class YouTubeContainer extends Component {

    constructor() {
        super();

        this.state = {
            videoId: "",
            channelId: "",
            channelTitle: "elrubiusOMG",
            loading: false,
            Id: ""

        };
    }

    componentDidMount() {

        Axios.get(`https://www.googleapis.com/youtube/v3/channels?forUsername=${this.state.channelTitle}&key=AIzaSyCky9oUUhBP7y7UXa8Dt0gu4raJjR9GwQ0&part=snippet,contentDetails,statistics,status`)

            .then(channel => {
                const channelId = channel.data.items[0].id

                this.setState({
                    ...this.state,
                    loading: true,
                    channelId: channelId,
                })

                console.log(this.state)
            }
            )
            .then(() => { return Axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCky9oUUhBP7y7UXa8Dt0gu4raJjR9GwQ0&channelId=${this.state.channelId}&part=snippet`).then(video => {
            const videoId = video.data.items[0].id.videoId
            

            this.setState({
                ...this.state,
                loading: true,
                videoId: videoId,
            })
            console.log(this.state.videoId)
        }) })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.yVideos)
        return (
            <React.Fragment>
                <h3>YouTube Displayer</h3>
                <DisplayerYT videoId={this.state.videoId}></DisplayerYT>

              
            </React.Fragment>
        )
    }
}


