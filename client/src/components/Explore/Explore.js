import React, { Component } from 'react'
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer';



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
                    <TwitchDisplayer toSearch={"BeyondTheSummit_PT"} 
                    ></TwitchDisplayer>
                    <button>Add Favs</button>
                    </div>
                    <div>
                    <TwitchDisplayer toSearch={"MUITOls"}
                    ></TwitchDisplayer>
                      <button>Add Favs</button>
                    </div>
                    <div>
                      <TwitchDisplayer toSearch={"한동숙 (handongsuk)"}
                    ></TwitchDisplayer>
                    </div>
                    {/* <ReactTwitchEmbedVideo ></ReactTwitchEmbedVideo> */}




                </React.Fragment>


            </div>
        )
    }
}
