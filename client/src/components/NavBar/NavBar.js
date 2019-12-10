import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="NavBarStyle">
                    <a href = "/My list">My list</a>
                    <a href = "/Discover">Discover</a>
                    <a href = "/Inicio">Inicio</a>
                </header>
            </div>
        )
    }
}
