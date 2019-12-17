import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SearchBar from '../SearchBar/SearchBar'
import "./TwitchDisplayer.css"
import AddFavBtn from '../AddFavBtn/AddFavBtn';

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
            <div className="theContainer">
                <SearchBar className="searchBarStyle" search={(e) => this.handlerTitle(e)}></SearchBar>
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
