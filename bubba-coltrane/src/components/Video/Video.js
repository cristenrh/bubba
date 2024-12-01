import React from 'react';
import YouTube from 'react-youtube';
import './Video.css';




class Video extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
      },  
    };
    return <div className="App">
  <div className="site-banner-header">
                    <h1 >
                        Videos
                    </h1>
                </div>
    <div className="grid-container ma4 video"> 
         <div className="vid-title"><h3>"Three Ounce Pour on Fox In The Morning"</h3></div>
           
         <iframe scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="fullscreen" src="https://www.fox7austin.com/video/1501471"  width ="640" height="400"></iframe>    </div>
    <div className="grid-container ma4 video">
      <div className="vid-title"><h3>"I Need Never Get Old"</h3></div>

        <div><YouTube videoId="UjaYLOxjZAI" opts={opts} onReady={this._onReady} /></div>
    </div>
    <div className="grid-container ma4 video">
      <div className="vid-title"><h3>"Bob Knoxious Shuffle"</h3></div>

        <div><YouTube videoId="cWjnvhJ1Rc0" opts={opts} onReady={this._onReady} /></div>
    </div>
    <div className="grid-container ma4 video">
      <div className="vid-title"><h3>"3 Oz. Pour"</h3></div>

        <div><YouTube videoId="XEyzw6NVNPU" opts={opts} onReady={this._onReady} /></div>
    </div>

    <div className="grid-container ma4 video">
      <div className="vid-title"><h3>"Beer Car Love Train - Official"</h3></div>

        <div><YouTube videoId="J_K3Pu-5FoY" opts={opts} onReady={this._onReady} /></div>
    </div>

    </div>
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


      
    export default Video;
      
