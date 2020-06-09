import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

class TopVideo extends Component {
    constructor(props){
        super(props);
        this.state={muted: true};
        this.changeVolState = this.changeVolState.bind(this);
    }

    changeVolState(e){
        e.preventDefault();
        const video=document.getElementById("top-video");
        video.muted = !video.muted;
        this.setState({muted: video.muted});
    }

    componentDidUpdate(prevProps){
        //fetch top video full details from server
        if(this.props.topVideo && !prevProps.topVideo)
            this.props.fetchVideo(this.props.topVideo.id);
    }

    render() {
        if(!this.props.topVideo) return (
            <div className="tops-video-video-main"></div>
        );
        const topVideo = this.props.topVideo;
        const test = "https://media.w3.org/2010/05/sintel/trailer_hd.ogv"
        //
        return (
            <div>
                <div className="tops-video-video-main">
                    <div className="top-video-video-container">
                        <video 
                        id="top-video"
                        className="top-video-video"
                        src={test}
                        autoPlay="autoplay" muted loop/>   
                    </div>
                    <div className="top-video-info-container">
                    <h1 className="top-video-title">{topVideo.title}</h1>
                    <p className="top-video-desc">{topVideo.description}...</p>
                    <div className="top-video-button-conatiner">
                        <div className="top-video-buttons">
                            <button className="top-video-play"><FontAwesomeIcon className="icon-right-margin" icon={faPlay}/>Play</button>
                            <button className="top-video-more-info"><FontAwesomeIcon className="icon-right-margin" icon={faInfoCircle}/>More Info</button>
                        </div>
                        <div className="top-video-sound">
                            <div className={`top-video-volume ${this.state.muted ? "mute" : "unmute"}`} onClick={this.changeVolState}></div>
                            <span className="top-video-content-rating">{topVideo.contentRating}</span>
                        </div>
                    </div>
                 </div>
                </div>  
                
            </div>
        );
    }
}

export default TopVideo;