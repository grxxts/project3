import React, { Component } from 'react'
import "./SearchBar.css"
import Authservice from "../../services/AuthService"

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.authservice = new Authservice;

        this.state = {
            text: ""
        }
    }

    handlerInput = (e) => {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault()
        this.props.search(this.state.text)
        // this.setState ({text: ""})
    }

    sendToFavs = () => {
        this.authservice.addFavs(this.state.text)
            .then((res) => {
                this.props.setUser(res) 
            })
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        return { user: nextProps.text }
    }


    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div className="searchContainer">
                    <div className="searchBarGeneral">
                        <input className="searchBarStyle" onChange={(e) => this.handlerInput(e)} type="text"></input>
                        <button className="imputButton" type="submit" onClick={(e) => { this.handlerSubmit(e) }}>Search</button>
                    </div>
                    <div className="favSearchBar">
                        <button className = "favBtn"onClick={() => this.sendToFavs()}><p className="favsIcon">Fav's ❤️</p></button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
