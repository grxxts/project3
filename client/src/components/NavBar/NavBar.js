import React, { Component } from 'react'
import "./NavBar.css"

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
                    <div className="utityLogo">
                    <img src="https://trello-attachments.s3.amazonaws.com/5dee44377e4ecb8a78a5deb2/5e1ef7904cc7bd6f6344d725/ca1cba45d27595583e657ef494ff431b/logo-utity-final.svg"></img>

                    </div>
                    <div>
                        <button className="btn-redirect" onClick={e => { this.re(e) }}>Home</button>
                    </div>
                    <button className="btn-redirect" onClick={e => { this.reExplore(e) }}>Explore</button>
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

