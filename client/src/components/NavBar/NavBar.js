import React, { Component } from 'react'
import "./NavBar.css"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="NavBarStyle">
                    <div className="ancleStyle">
                    <a href = "/My list">My list</a>
                    </div>
                    <div className="ancleStyle">
                    <a href = "/Discover">Discover</a>
                    </div>
                    <div className="ancleStyle">
                    <a href = "/Inicio">Inicio</a>
                    </div>
                </header>
            </div>
        )
    }
}
