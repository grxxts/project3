import React, { Component } from 'react'
import "./YouTube.css"
// import OneVideoYouTube from "./OneVideoYouTube"

export default class YouTube extends Component {

    constructor() {
        super();

        this.state = {
            video: [],
            loading: true,
            
        };
    }

    render() {
        return (
            <React.Fragment>
                    <div>
                    <h3>YouTube Displayer</h3>
                    <p>lalala esto es una prueba</p>
                    </div>
               
            </React.Fragment>
        )
    }
}
