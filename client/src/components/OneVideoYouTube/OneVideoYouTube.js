import React, { Component } from 'react'

export default class OneVideoYouTube extends Component {

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            yVideos: props.yVideos
        };
    }

    render() {
        return (
            <div className="YVideo">
            {/* <h5>{this.props.data.title}</h5>
            <p>{this.props.data.description}</p>
            <p> {this.props.data.id}</p> */}
        </div>

        )
    }
}
