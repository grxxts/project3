import React, { Component } from 'react'
import "./SearchBar.css"

export default class SearchBar extends Component {
    constructor(props) {
        super(props)

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
    }


    render() {
        return (
            <div>
                <input className="searchBarStyle" onChange={(e) =>  this.handlerInput(e) } type="text"></input>
                <button className="imputButton" type="submit" onClick={(e) => {this.handlerSubmit(e)}}>Search</button>
            </div >
        )
    }
}
