import React, { Component } from "react";

const VideoDetails = ({video}) => {
    if(!video){
        return <h5>Loading...</h5>;
    }
    const { title, description } = video.snippet;
    const url = `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="col-md-8 video-details">
            <div className="embed-responsive embed-responsive-16by9 video">
                <iframe className="embed-responsive-item" src={url} ></iframe>
            </div>
            <div className="details">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default VideoDetails;