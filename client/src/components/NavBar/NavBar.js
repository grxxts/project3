import React, { Component } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default class NavBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,

        };
    }

    re = () => {
        this.props.history.push('/home')
    }

    reMyList = () => {
        this.props.history.push('/mylist')
    }

    reExplore = () => {
        this.props.history.push('/explore')
    }



    render() {
        console.log(this)
        return (
            <div className="NavBarStyle">
                <div className="navBarLinks">
                    <div>
                        <button className="btn-redirect" onClick={e => { this.re(e) }}>Home</button>
                    </div>
                    <button className="btn-redirect" onClick={e => { this.reExplore(e) }}>Explore</button>
                    <div>
                        <button className="btn-redirect" onClick={e => { this.reMyList(e) }}>My List</button>
                    </div>
                </div>
                <div className="userStyle">
                    <h5>{this.props.user.username}</h5>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <div>
                                <img className="userImg" src={this.props.user.picture} />
                            </div></button>
                        <div className="dropdown-content">
                            <button className="btn-logout" onClick={() => { this.props.logout() }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


// src={this.props.user.picture}