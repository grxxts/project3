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


    removeFavs = () => {
        console.log(this.state.text)
        this.authservice.removeFavs(this.state.text)
        .then((res)=>{
            this.props.setUser(res)
        })
        .catch(err=>console.log(err)) 
    }

    render() {

        console.log(this.state.user)
        return (
            <React.Fragment>
                <div className="followedList">
                    <div className="twitchFavsList">
                        <img className ="companyLogo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Twitch_logo_%28wordmark_only%29.svg/455px-Twitch_logo_%28wordmark_only%29.svg.png"></img>
                        {this.state.user.followingPeople.map((followingPeople, idx) => {
                            console.log(followingPeople)
                            return (
                                
                                <a href="" key={idx} >{followingPeople} <button onClick={(followingPeople)=>this.removeFavs(followingPeople)}>Remove</button> </a>

                            );
                        })}
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
