import React, { Component } from 'react'
import "./NavBar.css"
import { Link, Route, Switch } from 'react-router-dom'
import Home2 from '../Home2/Home2'
import Explore from '../Explore/Explore'

export default class NavBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
          
        };
    }

    re=()=>{
        this.props.history.push('/home')
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
                                    <button onClick={e=>{this.re(e)}}>Home</button>

                                </li>
                                <li>
                                    <Link to="/explore">Explore</Link>

                                </li>
                                <li>
                                    <Link to="/mylist">My List</Link>

                                </li>
                            </ul>
                            
                      
                        </div>
                        <div className="dropdown">
                            <button className="dropbtn">My Profile</button>
                            <div className="dropdown-content">
                                <button onClick={()=>{this.props.logout()}}>LOGOUT</button>
                                <a href="/myfavs">My Favs</a>


                            </div>
                        </div>
                    </ul>
                </header>
            </div>
        )
    }
}
