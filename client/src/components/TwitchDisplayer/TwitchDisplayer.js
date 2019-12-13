import React, { Component } from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import SearchBar from '../SearchBar/SearchBar'

export default class TwitchDisplayer extends Component {

    constructor() {
        super();

        this.state = {
            streamerName: ""
           
        };
    }

    

    handlerTitle = (channel) => {
        const streamerName = channel
        console.log(channel)
        
        this.setState({
            ...this.state,
            streamerName: streamerName        
        })

    
    }
    
    


    
    componentDidMount() {

        this.handlerTitle()
       
        
        // this.setState({
        //     ...this.state,
        //     channel : ""
        // })
    }


   

    render() {
        console.log(this.state)
        return (
            <div>
                <SearchBar search={(e) => this.handlerTitle(e)}></SearchBar>
               {this.state.streamerName !== "" && <ReactTwitchEmbedVideo channel={this.state.streamerName} />}
            </div>
        )
    }
}


// 