import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle, faChevronDown, faPlusCircle, faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'
import { editVideoPlayRoute } from '../../../util/route_utils';

class Video extends Component {
    constructor(props){
        super(props);
        this.state = {toggleVideo: false, muted: true, otherArrow: false}
        this.timeOutInstance = null;
        this.uniqueId = Math.floor(Math.random() * 1000);

        this.switchToVideo = this.switchToVideo.bind(this);
        this.switchToPoster = this.switchToPoster.bind(this);
        this.addToList = this.addToList.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.epxandDetails = this.epxandDetails.bind(this);
        this.toggleOtherArrow = this.toggleOtherArrow.bind(this);
        this.triggerFetchVideo = this.triggerFetchVideo.bind(this);
        this.playVideo = this.playVideo.bind(this);
    }

    playVideo(e){
        debugger
        this.props.history.push(editVideoPlayRoute(this.props.video.id));
    }

    addToList(e) {
    }

    changeVolume(e) {
        // //debugger
        const videoElement = document.getElementById("cat-video"+this.uniqueId);
        videoElement.muted = !videoElement.muted;
        this.setState({muted: videoElement.muted});
    }

    epxandDetails(e) {
        e.stopPropagation();
        this.props.onVideoExpanded(this.props.video);
        this.setState({toggleVideo: false});
    }

    switchToVideo(e){
        this.timeOutInstance = setTimeout(() => {
             if(this.props.video.contentRating){
            this.setState({toggleVideo: true});
            } else {
                this.props.fetchVideo(this.props.video.id).then(()=>{
                    this.setState({toggleVideo: true});
                });
            }
        }, 700);
    }

    switchToPoster(e){
        e.preventDefault();
        clearTimeout(this.timeOutInstance);
        this.setState({toggleVideo: false});
    }

    toggleOtherArrow(e){
        // console.log("toggle other arrow triggered: "+this.state.otherArrow);
        e.stopPropagation();
        this.setState({otherArrow: !this.state.otherArrow});
    }

    triggerFetchVideo(e){
        this.props.fetchVideo(this.props.video.id).then(()=>{
            this.epxandDetails(e);
        });
    }

    nothing(e){
    }

    render() {
        if(!this.props.video) return null;
        const {video} = this.props;
        const expandedVideoId = this.props.expandedVideoId;
        // const color = "rgba(226, 226, 226, 0.719)"
        const color = "white";
        return (
            <div className={expandedVideoId === 0 ? "video-container" : 
            expandedVideoId === video.id ? "video-border": 
            "video-conatiner-main "+this.state.containerClass}>
                <div onMouseEnter={
                        expandedVideoId === 0   ? 
                        this.switchToVideo : expandedVideoId == video.id ? 
                        this.nothing : this.toggleOtherArrow
                    } 
                    onMouseLeave={
                        expandedVideoId === 0  ? 
                        this.switchToPoster : expandedVideoId == video.id ? 
                        this.nothing : this.toggleOtherArrow
                    } onClick={this.playVideo}>     

                    <video className="video-thumbnail" 
                    id={`cat-video${this.uniqueId}`} 
                    poster={video.thumbnailUrl} 
                    src={this.state.toggleVideo && expandedVideoId !== video.id ? 
                    video.videoUrl : ""} 
                    autoPlay muted /> 

                    <div className={`${!this.state.toggleVideo || expandedVideoId === video.id ? "hidden" : "video-detail"}` }>
                        <div className="video-detail-top">
                            <div className="video-detail-sub-1">
                                <Link to={editVideoPlayRoute(video.id)} className="video-play">
                                    <FontAwesomeIcon icon={faPlayCircle} size="lg" color={color}/>
                                </Link>
                                <h1 className="video-title">
                                    {video.title ? video.title.split("-")[0] : ""}
                                </h1>
                                <span className="content-rating">
                                    {video.contentRating}
                                </span>
                            </div>
                            <div className="video-detail-sub-2">
                                <span className="video-volume" onClick={this.changeVolume}>
                                    <FontAwesomeIcon icon={this.state.muted ? faVolumeMute : faVolumeUp} size="sm" color={color}/>
                                </span>
                                {/* <span className="video-add">
                                    <FontAwesomeIcon icon={faPlusCircle} size="sm" color={color}/>
                                </span> */}
                            </div>
                        </div>
                        <span className="video-expand-arrow" onClick={this.epxandDetails}>
                            <FontAwesomeIcon icon={faChevronDown} size="lg" color={color}/>
                        </span>
                    </div>
                    <span className={this.state.otherArrow && expandedVideoId !== video.id ? "video-expand-arrow-other" : "hidden"} onClick={this.triggerFetchVideo}>
                        <FontAwesomeIcon icon={faChevronDown} size="lg"/>
                    </span>
                </div>
            </div>
        );
    }
}

export default Video;