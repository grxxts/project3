import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SearchBar from '../SearchBar/SearchBar'
import "./TwitchDisplayer.css"

export default class TwitchDisplayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            streamerName: "auronplay",
            text: this.props.sendToFavs,
        };
    }



    handlerTitle = (channel) => {
        console.log(channel)
        const streamerName = channel
        // console.log(channel)

        this.setState({
            ...this.state,
            streamerName: streamerName
        })
    }


    // showFavs = (text) => {
    //     const text = text
    //     this.setState({
    //         ...this.state,
    //         text: text
    //     })
    // }
    
    componentWillReceiveProps() {
        this.setState({...this.state, streamerName: this.props.twitchName})
    }

    render() {
        console.log(this.props)
        // console.log(this.state)
        return (
            <div className="theContainer">
                <h1>{this.state.text}</h1>
                <SearchBar  className="searchBarStyle" search={(e) => this.handlerTitle(e)} setUser={this.props.setUser} ></SearchBar>
                {this.state.streamerName !== "" &&
                    <div className="displayerContainer">
                        <ReactTwitchEmbedVideo
                            autoplay="1"
                            channel="wesg_cs"
                            height="480"
                            muted={false}
                            targetClass="twitch-embed"
                            width="940"
                            theme="dark"
                            channel={this.state.streamerName}
                        />
                    </div>}
            </div>
        )
    }
}
