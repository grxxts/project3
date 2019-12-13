import React, { Component } from 'react';
import YouTube from 'react-youtube';
import "./DisplayerYT.css"
 
export default class OneVideoYouTube extends Component{
  render() {
    const opts = {
      height: '390px',
      width: '640px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
 
    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}