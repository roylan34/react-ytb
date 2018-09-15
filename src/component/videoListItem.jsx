import React, { Component } from "react";

const VideoListItem = ({ video, handleSelectedVideo }) => {
    
    const {thumbnails, description, title } =  video.snippet;
    return (
        <li onClick={ () => handleSelectedVideo(video) } className="list-group-item">
            <div className="media">
                <img src={thumbnails.default.url} alt="video" className="mr-3" />
                <div className="media-body">
                    <div className="media-heading"><strong>{title}</strong></div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;