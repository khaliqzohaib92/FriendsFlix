import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle, faChevronDown, faPlusCircle, faVolumeMute, faVolumeUp} from '@fortawesome/free-solid-svg-icons'

class Video extends Component {
    constructor(props){
        super(props);
        this.state = {switch: false, muted: true, otherArrow: false}
        this.timeOutInstance = null;
        this.switchToVideo = this.switchToVideo.bind(this);
        this.switchToPoster = this.switchToPoster.bind(this);
        this.playVideo = this.playVideo.bind(this);
        this.addToList = this.addToList.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.epxandDetails = this.epxandDetails.bind(this);
        this.nothing = this.nothing.bind(this);
        this.uniqueId = Math.floor(Math.random() * 1000);
    }

    playVideo(e){
        e.preventDefault();
    }

    addToList(e) {
        e.preventDefault();
    }

    changeVolume(e) {
        e.preventDefault();
        // debugger
        const videoElement = document.getElementById("cat-video"+this.uniqueId);
        videoElement.muted = !videoElement.muted;
        this.setState({muted: videoElement.muted});
    }

    epxandDetails(e) {
        e.preventDefault();
        this.props.onVideoExpanded(this.props.video);
        this.setState({switch: false});
    }

    switchToVideo(e){
        e.preventDefault();
        this.timeOutInstance = setTimeout(() => {
             if(this.props.video.contentRating){
            this.setState({switch: true});
            } else {
                this.props.fetchVideo(this.props.video.id).then(()=>{
                    this.setState({switch: true});
                });
            }
        }, 700);
    }

    switchToPoster(e){
        e.preventDefault();
        clearTimeout(this.timeOutInstance);
        this.setState({switch: false});
    }

    nothing(e){
        this.setState({otherArrow: !this.state.otherArrow})
    }

    generateUniqueVideoKey(id){
        return id ? id+this.uniqueId : this.props.expandedVideoId+this.uniqueId;
    }

    render() {
        if(!this.props.video) return null;
        // debugger
        const {video} = this.props;
        const color = "rgba(226, 226, 226, 0.719)"
        const videoUrl = "https://media.w3.org/2010/05/sintel/trailer_hd.ogv"
        const thumbnailUrl = "https://i.pinimg.com/236x/98/a9/86/98a986ed1761a2b11990912fa1921983.jpg";
        return (
            <div className={this.props.expandedVideoId === 0 ? "video-container" : this.generateUniqueVideoKey() == this.generateUniqueVideoKey(video.id) ? "video-border" : "video-conatiner-main"}>
                <div onMouseEnter={this.props.expandedVideoId === 0   ? this.switchToVideo : this.nothing} onMouseLeave={this.props.expandedVideoId === 0  ? this.switchToPoster : this.nothing}>               
                    <video className="video-thumbnail" id={`cat-video${this.uniqueId}`} poster={thumbnailUrl} src={this.state.switch && this.generateUniqueVideoKey() !== this.generateUniqueVideoKey(video.id) ? videoUrl : ""} autoPlay muted /> 
                    <div className={`${!this.state.switch || this.generateUniqueVideoKey() === this.generateUniqueVideoKey(video.id) ? "hidden" : "video-detail"}` }>
                        <div className="video-detail-top">
                            <div className="video-detail-sub-1">
                                <span className="video-play" onClick={this.playVideo}><FontAwesomeIcon icon={faPlayCircle} size="lg" color={color}/></span>
                                <h1 className="video-title">{video.title ? video.title.split("-")[0] : ""}</h1>
                                <span className="video-rating">{video.contentRating}</span>
                            </div>
                            <div className="video-detail-sub-2">
                                <span className="video-volume" onClick={this.changeVolume}><FontAwesomeIcon icon={this.state.muted ? faVolumeMute : faVolumeUp} size="sm" color={color}/></span>
                                <span className="video-add"><FontAwesomeIcon icon={faPlusCircle} size="sm" color={color}/></span>
                            </div>
                        </div>
                        <span className="video-expand-arrow" onClick={this.epxandDetails}><FontAwesomeIcon icon={faChevronDown} size="lg" color={color}/></span>
                    </div>
                    {/* TODO fix this and uncomment it */}
                    {/* <span className={this.state.otherArrow && this.generateUniqueVideoKey() !== video.id ? "video-expand-arrow-other" : "hidden"} onClick={this.epxandDetails}><FontAwesomeIcon icon={faChevronDown} size="lg" color={color}/></span> */}
                </div>
            </div>
        );
    }
}

export default Video;