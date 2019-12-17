import React, { Component } from 'react'
import "./FavLateral.css"

export default class FavLateral extends Component {

    constructor(props) {
        super(props);

        this.state = {
           saved: "",
        //    streamerName: ""
        };
    }

    render() {
        return (
            <React.Fragment>

            <div className="streamerFavContainer">
                {/* <h5>{this.props.streamerName}</h5> */}
                <img className="streamerPhoto" src="https://i.ytimg.com/vi/FhxlDVx5J3w/maxresdefault.jpg"></img>
            </div>
            </React.Fragment>
        )
    }
}
