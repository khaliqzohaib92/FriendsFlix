import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faPlus, faTimesCircle, faStart, faStar} from '@fortawesome/free-solid-svg-icons';
import { editVideoPlayRoute } from '../../../util/route_utils';


class VideoDetails extends Component {

    ratingArray(n){
        let ratingStarts= [];
        for (let index = 0; index < n/2; index++) {
            ratingStarts.push(0);
        }
        return ratingStarts;
    }

    runtime(sec) {
        //We are assuming that the epoch is in seconds
        var hours = sec / 3600,
            minutes = (hours % 1) * 60,
            seconds = (minutes % 1) * 60;
        return Math.floor(hours) + "h " + Math.floor(minutes) +"m";
      }

    render() {
        const expandedVideoId = this.props.expandedVideoId;
        const selectedVideo = this.props.selectedVideo;
        const closeVideoExpand = this.props.closeVideoExpand;
        return (
            <div>
                <div className={!expandedVideoId || expandedVideoId != selectedVideo.id ? "hidden" : "category-video-details-conatiner"}>
                        <div className="category-video-details">
                            <h1 className="category-video-details-title">{selectedVideo.title}</h1>
                            <div className="details">
                                <span className="category-video-details-video-rating">
                                    { this.ratingArray(selectedVideo.videoRating).map((i)=>{
                                            return <FontAwesomeIcon icon={faStar} className="rating-star" color="yellow" size="lg" key={Math.random()}/>
                                        })
                                    }
                                </span>
                                <span className="category-video-details-year">{selectedVideo.year}</span>
                                <span className="category-video-details-content-rating">{selectedVideo.contentRating}</span>
                                <span className="category-video-details-content-runtime">{this.runtime(selectedVideo.runtime)}</span>
                            </div>
                            <p className="category-video-details-desc">{selectedVideo.description}</p>
                            <div className="category-video-details-buttons">
                                <Link to={editVideoPlayRoute(selectedVideo.id)} className="category-video-play"><FontAwesomeIcon className="icon-right-margin" icon={faPlay}/>Play</Link>
                                {/* <button className="category-video-add-to-list"><FontAwesomeIcon className="icon-right-margin" icon={faPlus}/>My List</button> */}
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