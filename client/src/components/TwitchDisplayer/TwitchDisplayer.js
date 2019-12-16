import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SearchBar from '../SearchBar/SearchBar'

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
            <div>
                <SearchBar className="searchBarStyle" search={(e) => this.handlerTitle(e)}></SearchBar>
                {this.state.streamerName !== "" &&
                    <ReactTwitchEmbedVideo
                        autoplay
                        height="280"
                        layout="video"
                        muted={false}
                        targetClass="twitch-embed"
                        width="440" channel={this.state.streamerName}
                    />}
               
            </div>
        )
    }
}


// 