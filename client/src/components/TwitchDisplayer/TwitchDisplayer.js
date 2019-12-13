import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SearchBar from '../SearchBar/SearchBar'

export default class TwitchDisplayer extends Component {

    constructor() {
        super();
        
        this.state= {
            channel: ""
        }
    }

    render() {
        return (
            <div>
               <SearchBar ></SearchBar> 
                <ReactTwitchEmbedVideo channel="ESL_CSGO" />
            </div>
        )
    }
}
