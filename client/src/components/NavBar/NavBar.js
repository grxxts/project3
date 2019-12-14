import React, { Component } from 'react'
import "./NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="NavBarStyle">
                    <div className="navBarElements"></div>
                    <ul>
                        <div className="navBarLinks">
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">Discover</a></li>
                        <li><a href="contact.asp">My List</a></li>
                        </div>
                        <div class="dropdown">
                            <button className="dropbtn">My Profile</button>
                            <div class="dropdown-content">
                                <a href="/logout">Logout</a>
                                <a href="/myfavs">My Favs</a>

                               
                            </div>
                        </div>
                    </ul>
                </header>
            </div>
        )
    }
}
