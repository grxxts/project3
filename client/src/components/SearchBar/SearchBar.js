import React, { Component } from 'react'

export default class
    extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.search} type="text"></input>
                <button type="submit">Search</button>
            </div>

            
        )
    }
}
