import React from 'react';
import './Video.css';
import VideoList from './VideoList';
import { video} from '../band'



class Video extends React.Component {
  render() {
    return <div className="App">
  <div className="site-banner-header">
                    <h1 >
                        Videos
                    </h1>
                </div>
   
                <VideoList video={video} />
    </div>
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


      
    export default Video;
      
