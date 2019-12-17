import React, { Component } from 'react'
import "./SearchBar.css"
import AddFavBtn from '../AddFavBtn/AddFavBtn'
import DeleteFavBtn from '../DeleteFavBtn/DeleteFavBtn'
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
    }

    sendToFavs = () => {
        console.log(this.state.text)
        this.authservice.addFavs(this.state.text)
        .then((res)=>console.log(res))
        .catch(err=>console.log(err)) 
    }

    render() {
        return (
            <div>
                <input placeholder = "my favs" className="searchBarStyle" onChange={(e) =>  this.handlerInput(e) } type="text"></input>
                <button className="imputButton" type="submit" onClick={(e) => {this.handlerSubmit(e)}}>Search</button>
                <button onClick={()=>this.sendToFavs()}>Add Favs</button>
                <DeleteFavBtn></DeleteFavBtn>
            </div >
        )
    }
}
