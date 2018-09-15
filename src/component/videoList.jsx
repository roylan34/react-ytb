import React, { Component } from "react";
import VideoListItem from './videoListItem';

const  VideoList = ({videos, handleSelectedVideo}) => {
    const videolist = videos.map(video => {
        return (<VideoListItem 
                key={video.id.videoId} 
                video={video} 
                handleSelectedVideo = {handleSelectedVideo}
                />);
    })
    return (
        <div className="col-md-4">
            <ul className="list-group">
                {videolist}
            </ul>
        </div>
    )
}

export default VideoList;