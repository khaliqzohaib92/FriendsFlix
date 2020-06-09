import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchVideo } from '../../../actions/video/video_action';
import {withRouter} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

class VideoPlayer extends Component {

    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
    }
    
    componentDidMount(){
        if(!this.props.video){
            this.props.fetchVideo(this.props.match.params.id);
        }
    }

    goBack(e){
        this.props.history.goBack();
    }

    render() {
        const video = this.props.video;
        if(!video) return null;
        return (
            <div className="video-player-conatainer">
                <video
                    src={video.videoUrl} poster={video.thumbnailUrl}
                    controls
                    autoPlay
                />
                <div className="video-player-button" onClick={this.goBack}>
                   <span className="icon-vidoe-player-back"> <FontAwesomeIcon  icon={faArrowLeft} size="lg"/></span>
                </div>
            </div>
        );
    }
}


const mSTP = (state, ownProps)=>{
    const video = state.entities.videos[ownProps.match.params.id];
    return {
        video: video ? video : undefined
    }
}

const mDTP = (dispatch)=>{
    return {
        fetchVideo:(videoId) => dispatch(fetchVideo(videoId)),
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoPlayer));