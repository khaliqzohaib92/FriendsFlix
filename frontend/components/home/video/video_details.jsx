import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPlus, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import { editVideoPlayRoute } from '../../../util/route_utils';


class VideoDetails extends Component {
    render() {
        const expandedVideoId = this.props.expandedVideoId;
        const selectedVideo = this.props.selectedVideo;
        const closeVideoExpand = this.props.closeVideoExpand;
        return (
            <div>
                <div className={!expandedVideoId ? "hidden" : "category-video-details-conatiner"}>
                        <div className="category-video-details">
                            <h1 className="category-video-details-title">{selectedVideo.title}</h1>
                            <span className="category-video-details-content-rating">{selectedVideo.contentRating}</span>
                            <p className="category-video-details-desc">{selectedVideo.description}</p>
                            <div className="category-video-details-buttons">
                                <Link to={editVideoPlayRoute(selectedVideo.id)} className="category-video-play"><FontAwesomeIcon className="icon-right-margin" icon={faPlay}/>Play</Link>
                                <button className="category-video-add-to-list"><FontAwesomeIcon className="icon-right-margin" icon={faPlus}/>My List</button>
                            </div>
                        </div>
                        <div className="category-video-gradient">

                        </div>
                        <div className="category-video-player">
                            <video poster={selectedVideo.thumbnailUrl} src={!expandedVideoId ? "" : selectedVideo.videoUrl} autoPlay muted loop/>
                        </div>
                        <span className="cross" onClick={closeVideoExpand}><FontAwesomeIcon icon={faTimesCircle} size="lg"/></span>
                </div>
            </div>
        );
    }
}

export default VideoDetails;