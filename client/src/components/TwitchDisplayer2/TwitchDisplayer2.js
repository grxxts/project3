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
        // console.log(channel)

        this.setState({
            ...this.state,
            streamerName: streamerName
        })
    }





    componentDidMount() {

        // this.handlerTitle()

    }




    render() {
        // console.log(this.state)
        return (
            <div className="explore-twitch">
                <div>
                    <ReactTwitchEmbedVideo
                       autoplay={false}
                        height="240"
                        layout="video"
                        muted={true}
                        targetClass="twitch-embed"
                        width="400" channel={this.state.streamerName}
                    />}
                    </div>
               
            </div>
        )
    }
}
