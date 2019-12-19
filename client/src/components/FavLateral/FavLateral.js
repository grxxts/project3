import React, { Component } from 'react'
import "./FavLateral.css"
import Authservice from "../../services/AuthService"

export default class FavLateral extends Component {

    constructor(props) {
        super(props);
        this.authservice = new Authservice;

        this.state = {
            user: this.props.user,

        };
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return { user: nextProps.user }
    }


    removeFavs = (favName) => {
        const streamerName = favName
        this.authservice.removeFavs(streamerName)
            .then((res) => {
                this.props.setUser(res)
            })
            .catch(err => console.log(err))
    }


    renderTwitch = (followingPeople) => {
        // console.log(followingPeople) 
        // this.props.(this.state.text)
        //     .then((res) => {
        //         this.props.setUser(res)
        //     })
        //     .catch(err => console.loh(err))
    }



    render() {
        return (
            <React.Fragment>
                <div className="followedList">
                    <div className="twitchFavsList">
                        <div>
                            <img className="companyLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Twitch_logo_%28wordmark_only%29.svg/455px-Twitch_logo_%28wordmark_only%29.svg.png"></img>
                        </div>
                        {this.state.user.followingPeople.map((followingPeople, idx) => {
                            console.log(followingPeople)
                            return (
                                <div><a onClick={() => this.props.renderTwitch(followingPeople)} key={idx} >{followingPeople} </a> <button className="remove-btn" onClick={() => this.removeFavs({ followingPeople })}>x</button> </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
