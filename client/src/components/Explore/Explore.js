import React, { Component } from 'react'
import TwitchDisplayer2 from '../TwitchDisplayer2/TwitchDisplayer2';



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
            <div>
                <React.Fragment>
                    <div>
                      <TwitchDisplayer2 toSearch={"한동숙 (handongsuk)"}
                    ></TwitchDisplayer2>
                    </div>
                    <div>
                      <TwitchDisplayer2 toSearch={"wesg_cs"}
                    ></TwitchDisplayer2>
                    </div>
                    <div>
                      <TwitchDisplayer2 toSearch={"auronplay"}
                    ></TwitchDisplayer2>
                    </div>






                </React.Fragment>


            </div>
        )
    }
}
