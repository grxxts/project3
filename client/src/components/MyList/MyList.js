import React, { Component } from 'react'
import PeopleIFollow from '../PeopleIFollow/PeopleIFollow'
import TwitchDisplayer from '../TwitchDisplayer/TwitchDisplayer'

export default class MyList extends Component {
    render() {
        return (
           <React.Fragment>
              <PeopleIFollow></PeopleIFollow>
              <div>
                    <TwitchDisplayer toSearch={"MUITOls"}
                    ></TwitchDisplayer>
                      <button>Discard User</button>
                    </div>
           </React.Fragment>
        )
    }
}
