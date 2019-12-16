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



    render() {
        console.log(this)
        return (
            <div>
                <header className="NavBarStyle">
                    <div className="navBarElements"></div>
                    <ul>
                        <div className="navBarLinks">

                            <ul>
                                <li>
                                    {/* <Link to="/" onClick={e=>{this.re(e)}}>Home</Link> */}
                                    <button onClick={e => { this.reMyList(e) }}>My List</button>

                                </li>
                                <li>
                                    <Link to="/explore">Explore</Link>

                                </li>
                                <li>
                                    <button onClick={e => { this.re(e) }}>Home</button>

                                </li>
                            </ul>


                        </div>
                        <div>
                            <h3>Hola {this.props.user.username}</h3>    
                        </div>
                        <div>
                            <img className="userImg"src={this.props.user.picture} alt="userIMG"/>
                        </div>

                        <div className="dropdown">
                            <button className="dropbtn">My Profile</button>
                            <div className="dropdown-content">
                                <button onClick={() => { this.props.logout() }}>LOGOUT</button>
                                <a href="/myfavs">My Favs</a>

                            </div>
                        </div>
                    </ul>
                </header>
            </div>
        )
    }
}
