import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import VideoDetails from '../video/video_details'
import { editVideoPlayRoute } from '../../../util/route_utils';
import {Link} from 'react-router-dom';
import {findType} from '../../../util/util'
import { TYPE_ALL } from '../../../util/constants';


class TopVideo extends Component {
    constructor(props){
        super(props);
        this.state={muted: true, expandedVideoId: undefined};
        this.changeVolState = this.changeVolState.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.closeVideoExpand = this.closeVideoExpand.bind(this);
    }

    changeVolState(e){
        e.preventDefault();
        const video=document.getElementById("top-video");
        video.muted = !video.muted;
        this.setState({muted: video.muted});
    }

    fetchData(){
        if(!this.props.topVideo){
            let type = findType(this.props.location.pathname);
            this.props.fetchVideosByGenre(this.props.genre.id,
               type  == TYPE_ALL ? undefined : type );
        }else
        if(!this.props.topVideo.description){
            this.props.fetchVideo(this.props.topVideo.id);
        }
    }

    componentDidMount(){
        //fetch top video full details from server
      this.fetchData();
    }

    componentDidUpdate(prevProps){
        this.fetchData();
    }

    showDetails(e){
        e.preventDefault();
        this.setState({expandedVideoId: this.props.topVideo.id});
    }

    closeVideoExpand(e){
        this.setState({expandedVideoId: undefined});
    }

    render() {

        if(!this.props.topVideo) return (
            <div className="tops-video-video-main"></div>
        );
        const topVideo = this.props.topVideo;
        //
        return (
            <>
                <div className={this.state.expandedVideoId ? "hidden" : "tops-video-video-main"}>
                    <div className="top-video-video-container">
                        <video 
                        id="top-video"
                        className="top-video-video"
                        src={this.state.expandedVideoId ? "" : topVideo.videoUrl}
                        autoPlay="autoplay" muted loop/>   
                    </div>
                    <div className="top-video-info-container">
                    <h1 className="top-video-title">{topVideo.title}</h1>
                    <p className="top-video-desc">{topVideo.description}...</p>
                    <div className="top-video-button-conatiner">
                        <div className="top-video-buttons">
                            <Link to={editVideoPlayRoute(topVideo.id)} className="top-video-play">
                                <FontAwesomeIcon className="icon-right-margin" icon={faPlay}/>Play
                            </Link>
                            <button className="top-video-more-info" onClick={this.showDetails}>
                                <FontAwesomeIcon className="icon-right-margin" icon={faInfoCircle}/>More Info
                            </button>
                        </div>
                        <div className="top-video-sound">
                            <div className={`top-video-volume ${this.state.muted ? "mute" : "unmute"}`} onClick={this.changeVolState}></div>
                            <span className="top-video-content-rating">{topVideo.contentRating}</span>
                        </div>
                    </div>
                 </div>
                </div>  
                <div className={!this.state.expandedVideoId ? "hidden" : "top-video-details"}>
                    <VideoDetails expandedVideoId={this.state.expandedVideoId} selectedVideo={topVideo} closeVideoExpand={this.closeVideoExpand}/>
                </div>
            </>
        );
    }
}

export default TopVideo;