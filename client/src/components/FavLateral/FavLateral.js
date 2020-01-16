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
        this.authservice.removeFavs(streamerName).then((res) => {
            console.log(res)
            this.props.setUser(res)
        })
            .catch(err => console.log(err))
    }


    renderTwitch = (followingPeople) => {

    }

    render() {
        console.log(this.props.setUser)
        return (
            <React.Fragment>
                <div className="followedList">
                    <div className="twitchFavsList">
                        <div>
                            <h4>Fav Streamers</h4>
                            <hr className="breaker"></hr>
                        </div>
                        {this.state.user.followingPeople.map((followingPeople, idx) => {
                            console.log(followingPeople)
                            return (
                                <div className="favLateral">
                                    <div className="twitchRender"><a onClick={() => this.props.renderTwitch(followingPeople)} key={idx} >{followingPeople} </a>
                                    </div>
                                    <div className="removeContainer"> <button className="remove-btn" onClick={() => this.removeFavs({ followingPeople })}>x</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
