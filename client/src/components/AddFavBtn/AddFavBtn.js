import React, { Component } from 'react'

export default class AddFavBtn extends Component {

    constructor(props){
        super(props)

        this.state={
            saved: "",
            streamerName: "",
            text: ""
        }
    }

    saveFavorite = (e) =>{
        console.log(this.props.saved)
        e.preventDefault()
        this.setState({
            ...this.state,
            saved: e.target.value,
            streamerName: e.target.value,
            text: e.target.value
        })
        
    }
    
    render() {
        return (
            <div>
                <button onClick={(e) => {this.saveFavorite(e)}}>Add Favs</button>
            </div>
        )
    }
}
