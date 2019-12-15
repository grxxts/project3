import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import TwitterContainer from '../Twitter/TwitterContainer'
import YouTubeContainer from '../YouTube/YouTubeContainer'
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer'

export default class Home2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            showYT: false,
            showTwitter: false,
            showTwitch: false
        };
    }

    toggleShowYT = () => {
        const { showYT } = this.state;
        this.setState({ ...this.state, showYT: !showYT })
    }

    toggleShowTwitter = () => {
        const { showTwitter } = this.state;
        this.setState({ ...this.state, showTwitter: !showTwitter })
    }

    toggleShowTwitch = () => {
        const { showTwitch } = this.state;
        this.setState({ ...this.state, showTwitch: !showTwitch })
    }

    render() {
        let youtube = <React.Fragment></React.Fragment>
        if (this.state.showYT === true) {
            youtube = <YouTubeContainer></YouTubeContainer>
        } else {
            youtube = <React.Fragment></React.Fragment>
        }

        let twitter = <React.Fragment></React.Fragment>
        if (this.state.showTwitter === true) {
            twitter = <TwitterContainer></TwitterContainer>
        } else {
            twitter = <React.Fragment></React.Fragment>
        }

        let twitch = <React.Fragment></React.Fragment>
        if (this.state.showTwitch === true) {
            twitch = <TwitchDisplayer></TwitchDisplayer>
        } else {
            twitch = <React.Fragment></React.Fragment>
        }

        return (



            <React.Fragment><NavBar loggedInUser={this.state.user} {...this.props} />
                <div className="generalContainer">
                    <div className="YoutubeContainerStyle">
                        <button className="show-button" onClick={this.toggleShowYT}>{this.state.showYT ? 'Hide form' : 'ShowYT'}</button>
                        {youtube}
                    </div>
                    <div className="TwitterContainerStyle">
                        <button className="show-button" onClick={this.toggleShowTwitter}>{this.state.showTwitter ? 'Hide form' : 'ShowTwitter'}</button>
                        {twitter}
                    </div>
                    <div>
                        <button className="show-button" onClick={this.toggleShowTwitch}>{this.state.showTwitch ? 'Hide form' : 'ShowTwitch'}</button>
                        {twitch}
                    </div>
                    <div>
                    </div>
                </div>
            </React.Fragment>





        )
    }
}

