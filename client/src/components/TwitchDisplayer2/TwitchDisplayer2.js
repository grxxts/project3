import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import "./TwitchDisplayer2.css"


export default class TwitchDisplayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            streamerName: this.props.toSearch
        };
    }



    handlerTitle = (channel) => {
        const streamerName = channel
        this.setState({
            ...this.state,
            streamerName: streamerName
        })
    }



    render() {
        return (
                   
                    <ReactTwitchEmbedVideo className ="displayer2"
                        autoplay={false}
                        height="220"
                        layout="video"
                        muted={true}
                        targetClass="twitch-embed"
                        width="300" channel={this.state.streamerName}
                    />
                  
        )
    }
}
