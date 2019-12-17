import React, { Component } from 'react'

export default class DeleteFavBtn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // saved: saved,
            // streamerName: streamerName,
            // text: text
        }
    }

    deleteFavorite = (e) =>{
        console.log(this.props.delete)
        e.preventDefault()
        this.setState({
            ...this.state,
            saved: "0",
            streamerName: "",
            text: ""
        })
        
    }


    render() {
        return (
            <div>
                <button onClick={(e) => { this.saveFavorite(e) }}>Delete Fav</button>
            </div>
        )
    }
}
