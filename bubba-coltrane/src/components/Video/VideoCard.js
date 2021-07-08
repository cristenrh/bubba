import React from 'react';
import YouTube from 'react-youtube';

const VideoCard= ({id, title}) => {
    const opts = {
      // height: '390',
      // width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
      }
    }
    return (
      <div className="grid-container ma4 video">
      <div className="vid-title"> <h3>{title}</h3></div>
        <div className="vid-player"><YouTube videoId={id} opts={opts} /></div>
    </div>
    )
};

export default VideoCard;