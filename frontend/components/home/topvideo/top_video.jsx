import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faInfoCircle, faSortDown} from '@fortawesome/free-solid-svg-icons'
import VideoDetails from '../video/video_details'
import { editVideoPlayRoute } from '../../../util/route_utils';
import {Link} from 'react-router-dom';
import {findType} from '../../../util/util'
import { TYPE_ALL, TYPE_MOVIES } from '../../../util/constants';
import { fetchVideosByGenre } from '../../../actions/video/video_action';


class TopVideo extends Component {
    constructor(props){
        super(props);
        this.state={muted: true, expandedVideoId: undefined, genreId: this.props.genre.id};
        this.changeVolState = this.changeVolState.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.closeVideoExpand = this.closeVideoExpand.bind(this);
        this.onGenreClick = this.onGenreClick.bind(this);
    }

    changeVolState(e){
        e.preventDefault();
        const video=document.getElementById("top-video");
        video.muted = !video.muted;
        this.setState({muted: video.muted});
    }

    fetchData(){
        if(!this.props.topVideo){
            this.fetchVideos(this.state.genreId)
        }else
        if(!this.props.topVideo.description){
            this.props.fetchVideo(this.props.topVideo.id);
        }
    }

    fetchVideos(id){
        let type = findType(this.props.location.pathname);
        return this.props.fetchVideosByGenre(id,
           type  == TYPE_ALL ? undefined : type );
    }

    componentDidMount(){
      
        //fetch top video full details from server
      this.fetchData();
    }

    componentDidUpdate(prevProps){
          //resetting genre to all or type change
          if(prevProps.location.pathname !== this.props.location.pathname &&
            this.state.genreId != this.props.genres[0].id){
            this.setState({genreId: this.props.genres[0].id, muted: true, expandedVideoId: undefined});
            this.props.triggerRerender(this.props.genres[0].id);
        }
        else
            this.fetchData();
    }

    showDetails(e){
        e.preventDefault();
        this.setState({expandedVideoId: this.props.topVideo.id});
    }

    closeVideoExpand(e){
        this.setState({expandedVideoId: undefined});
    }

    onGenreClick(e){
      const genreId =   e.target.value
        if(genreId != this.state.genreId){
            this.props.triggerRerender(genreId);
            this.setState({genreId: genreId})
        }
    }

    render() {

        if(!this.props.topVideo) return (
            <div className="tops-video-video-main"></div>
        );
        const topVideo = this.props.topVideo;
        // debugger
        const videoType = findType(this.props.location.pathname);
        // console.log(`${videoType} == ${TYPE_ALL}  ${videoType===TYPE_ALL}`);
        const {genres} = this.props;
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
                <div className={`${videoType === TYPE_ALL ? "hidden" :"genre-container"}`}>
                        <h1 className="genre-title">{videoType == TYPE_MOVIES ? "Movies" : "TV Shows" }</h1>
                        <select className="genre-menu" id="genre-menu" onChange={this.onGenreClick} value={this.state.genreId}>
                            {
                                genres.map((genre)=>{
                                    return <option value = {genre.id}  className="genre-item" key={genre.id}>{genre.name}</option>
                                })
                            }
                        </select>
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