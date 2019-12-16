import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import YouTubeContainer from '../YouTube/YouTubeContainer';
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"



export default class Explore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,

        };
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <React.Fragment>
                    {/* <YouTubeContainer></YouTubeContainer> */}
                    <TwitchDisplayer toSearch={"BeyondTheSummit_PT"}
                    ></TwitchDisplayer>
                    <TwitchDisplayer toSearch={"MUITOls"}
                    ></TwitchDisplayer>
                      <TwitchDisplayer toSearch={"한동숙 (handongsuk)"}
                    ></TwitchDisplayer>
                    {/* <ReactTwitchEmbedVideo ></ReactTwitchEmbedVideo> */}




                </React.Fragment>


            </div>
        )
    }
}
