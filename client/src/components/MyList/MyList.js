import React, { Component } from 'react'
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer'

export default class MyList extends Component {
    render() {
        return (
           <React.Fragment>
              <div>
                    <TwitchDisplayer toSearch={"MUITOls"}
                    ></TwitchDisplayer>
                      <button>Discard User</button>
                    </div>
           </React.Fragment>
        )
    }
}
