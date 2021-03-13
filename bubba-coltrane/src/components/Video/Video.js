import React from 'react';
import { withRouter } from 'react-router';
import YouTube from 'react-youtube';
import './Video.css';



class Video extends React.Component {
    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls:0,
          modestbranding:1,
          rel:0,
          showinfo:0,
        },
      };
  
      return <YouTube videoId="GVW9piKz1o8" opts={opts} onReady={this._onReady} />;
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }
      
    export default Video;
      
