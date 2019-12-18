import React, { Component } from 'react'
import TwitterContainer from '../Twitter/TwitterContainer'
import YouTubeContainer from '../YouTube/YouTubeContainer'
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer'
import "./Home2.css"
import FavLateral from '../FavLateral/FavLateral'

export default class Home2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
            showYT: false,
            showTwitter: true,
            showTwitch: true
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

    static getDerivedStateFromProps=(nextProps, prevState)=> {
        return {user: nextProps.user}
    }

    render() {
        console.log(this.state)
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
            twitch = <TwitchDisplayer toSearch={"BeyondTheSummit_PT"} setUser={this.props.setUser}></TwitchDisplayer>
        } else {
            twitch = <React.Fragment></React.Fragment>
        }

        return (
            <React.Fragment>
                <div className="rollTwitter">
                    <div className="containerStyleTwitter">
                        <button className="show-button" onClick={this.toggleShowTwitter}>{this.state.showTwitter ? 'X' : 'Show Twitter'}</button>
                        {twitter}
                    </div>
                </div>
                <div className="generalContainer">
                <div>
                    <FavLateral user={this.state.user}></FavLateral>
                </div>
                    <div>
                        <button className="show-button" onClick={this.toggleShowYT}>{this.state.showYT ? 'X' : 'Show YouTube'}</button>
                        {youtube}
                    </div>
                    <div className="containerStyle">
                        <button className="show-button" onClick={this.toggleShowTwitch}>{this.state.showTwitch ? 'X' : 'Show Twitch'}</button>
                        {twitch}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

