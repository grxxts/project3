import React, { Component } from 'react'
import TwitchDisplayer2 from '../TwitchDisplayer2/TwitchDisplayer2';
import "./Explore.css"

export default class Explore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.user,
        };
    }

    render() {
        console.log(this.props)
        return (
            <div className="theFather">
                <React.Fragment>
                  
                        
                        <TwitchDisplayer2 toSearch={"한동숙 (handongsuk)"}
                        ></TwitchDisplayer2>
                        <TwitchDisplayer2 toSearch={"wesg_cs"}
                        ></TwitchDisplayer2>
                        <TwitchDisplayer2 toSearch={"얍얍 (yapyap30)"}
                        ></TwitchDisplayer2>
                        <TwitchDisplayer2 toSearch={"BeyondTheSummit_PT"}
                        ></TwitchDisplayer2>
                        <TwitchDisplayer2 toSearch={"thegrefg"}
                        ></TwitchDisplayer2>
                        <TwitchDisplayer2 toSearch={"auronplay"}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"GamesDoneQuick"}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"Pestily."}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"xQcOW"}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"summit1g"}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"Castro_1021"}
                        ></TwitchDisplayer2>
                          <TwitchDisplayer2 toSearch={"loltyler1"}
                        ></TwitchDisplayer2>
                </React.Fragment>
            </div>
        )
    }
}
