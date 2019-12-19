import React, { Component } from 'react'
import Axios from 'axios';
import DisplayerYT from '../DisplayerYT/DisplayerYT'
import SearchBar from '../SearchBar/SearchBar';
import "./YouTubeContainer.css"


export default class YouTubeContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videoId: "",
            channelId: "",
            channelTitle: "TravisScottVEVO",
            loading: false,
            Id: "",
            
        };
    }

    handlerTitle = (title) => {
        this.setState({
            ...this.state,
            channelTitle: title
        }, () => {
            this.petisPutaMadre()
        })
    }


    componentDidMount() {
        this.petisPutaMadre()
    }

    petisPutaMadre = () => {
        console.log("holaaaa")
        Axios.get(`https://www.googleapis.com/youtube/v3/channels?forUsername=${this.state.channelTitle}&key=${process.env.REACT_APP_YT_KEY}&part=snippet,contentDetails,statistics,status`)

            .then(channel => {
                const channelId = channel.data.items[0].id
                console.log("holaaaaaaaaaaaaaaaa")
                this.setState({
                    ...this.state,
                    loading: true,
                    channelId: channelId,
                })

                console.log(this.state)
                console.log(process.env)
            }
            )


            .then(() => {
                return Axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_KEY}&channelId=${this.state.channelId}&part=snippet`).then(video => {
                    const videoId = video.data.items[0].id.videoId


                    this.setState({
                        ...this.state,
                        loading: true,
                        videoId: videoId,

                    })
                    console.log(this.state.videoId)
                })
            })
            .catch(err => console.log(err))

    }

    render() {
        console.log(this.state.channelId)
        return (
            <React.Fragment onSubmit={this.handleSubmit} >
                <div className="containerYouTube">
                    <div className="searchBarContainer">
                    <SearchBar className="searchBarStyle" search={this.handlerTitle}></SearchBar>
                    </div>
                    <div className="theContainerYT">
                    <DisplayerYT videoId={this.state.videoId}></DisplayerYT>
                    <h4>Watching {this.state.channelTitle} channel</h4>
                    </div>
                
                </div>
            </React.Fragment>
        )
    }
}


