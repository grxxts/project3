import React, { Component } from 'react'
import "./FavLateral.css"


export default class FavLateral extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,

        };
    }

    render() {
       
        
        return (
            <React.Fragment>

            <div className="streamerFavContainer">
                <img className="streamerPhoto" src="https://i.ytimg.com/vi/FhxlDVx5J3w/maxresdefault.jpg"></img>
            </div>
            </React.Fragment>
        )
    }
}
