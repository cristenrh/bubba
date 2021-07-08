import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ video }) => {
    return(
        <div>
            {
            video.map((user, i) => {
                return (
                <VideoCard 
                    key={i} 
                    id={video[i].id} 
                    title={video[i].title} 
                />
            );
        })
    }
    </div>
    );
    }

export default VideoList;