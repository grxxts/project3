import React, { Component } from 'react'
import Axios from 'axios';
import DisplayerYT from '../DisplayerYT/DisplayerYT'
import SearchBar from '../SearchBar/SearchBar';

export default class YouTubeContainer extends Component {

    constructor() {
        super();

        this.state = {
            videoId: "",
            channelId: "",
            channelTitle: "TravisScottVEVO",
            loading: false,
            Id: "",
        /*     show: false */

        };
    }

    handlerTitle= (title) => {
        this.setState({
            ...this.state,
            channelTitle: title
        },()=>{
            this.petisPutaMadre()
        })
    }
    

    componentDidMount() {
        this.petisPutaMadre()
    }

    petisPutaMadre = () => {
        Axios.get(`https://www.googleapis.com/youtube/v3/channels?forUsername=${this.state.channelTitle}&key=${process.env.REACT_APP_YT_KEY}&part=snippet,contentDetails,statistics,status`)

        .then(channel => {
            const channelId = channel.data.items[0].id

            this.setState({
                ...this.state,
                loading: true,
                channelId: channelId,
            })

            console.log(this.state)
            console.log(process.env)
        }
        )

        
        .then(() => { return Axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=${this.state.channelId}&part=snippet`).then(video => {
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


/*     toggleShow = () => {
        const { show } = this.state;
        this.setState({...this.state, show: !show})
      } */


    render() {
        console.log(this.state.yVideos)
        return (
            <React.Fragment onSubmit={this.handleSubmit} >
                <div></div>
                <h3>YouTube Displayer</h3>
                <SearchBar search={this.handlerTitle}></SearchBar>
                {/* <button className="show-button" onClick={this.toggleShow}>{this.state.show ? 'Hide form' : 'Show form'}</button> */}
                <DisplayerYT videoId={this.state.videoId}></DisplayerYT>
            </React.Fragment>
        )
    }
}


