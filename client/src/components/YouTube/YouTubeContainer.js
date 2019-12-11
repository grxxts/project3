import React, { Component } from 'react'

import Axios from 'axios';
import OneVideoYouTube from '../OneVideoYouTube/OneVideoYouTube';
// import OneVideoYouTube from "./OneVideoYouTube"

export default class YouTubeContainer extends Component {

    constructor() {
        super();

        this.state = {
            yVideos: [],
            loading: true,
            
        };
    }

    componentDidMount() {
        Axios.get("https://www.googleapis.com/youtube/v3/channels?forUsername=auronplay&key=AIzaSyCky9oUUhBP7y7UXa8Dt0gu4raJjR9GwQ0&part=snippet,contentDetails,statistics,status")
        .then(yVideos => {
            console.log(yVideos)
            this.setState({
                yVideos: yVideos.data,
                loading: false
            })
        }
        )
        .catch(err => console.log(err))
        }

       
    render() {
        return (
            <React.Fragment>
                    <div>
                    <h3>YouTube Displayer</h3>
                    <OneVideoYouTube></OneVideoYouTube>
                    <p>lalala esto es una prueba</p>
                    </div>
               
            </React.Fragment>
        )
    }
}
