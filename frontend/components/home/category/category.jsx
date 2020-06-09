import React, { Component } from 'react';
import VideoConatiner from '../video/video_container';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight, faPlay, faPlus, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

class Category extends Component {

    constructor(props){
        super(props);

        this.state={arrows: false, tranlateX: 0, expandedVideoId: 0, selectedVideo:{}};
        this.elementsOnRight = 0;
        this.elementsOnLeft = 0;
        this.elements = null;
        this.totalElements = null;
        this.feasibleElments = null;
        this.elementWidth = 0;
        this.changeArrowVisiblity = this.changeArrowVisiblity.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.onVideoExpanded = this.onVideoExpanded.bind(this);
        this.closeVideoExpand = this.closeVideoExpand.bind(this);
    }


    changeArrowVisiblity(e){
        this.initDefaultValues();
        this.setState({arrows: !this.state.arrows});
    }

    initDefaultValues(){
        if(!this.elements){
            //initialize with default values
            this.elements = document.getElementById(this.props.category.title+"main").childNodes;
            this.totalElements = this.elements.length;
            this.elementWidth = this.elements[0].offsetWidth
            this.feasibleElments = Math.floor(screen.availWidth/this.elementWidth);
            this.elementsOnLeft = this.totalElements - this.feasibleElments - this.elementsOnRight;
        }
    }

    scrollRight(e){
        //return if nothing left to scroll on left
        if(this.elementsOnRight+this.feasibleElments>= this.totalElements){
             return null;
        }
        this.elementsOnLeft = this.totalElements - this.feasibleElments - this.elementsOnRight;
        
        let tranlationX = 0;
        if(this.elementsOnLeft >= this.feasibleElments){
            //have to scroll all the feasible items
            tranlationX = this.feasibleElments*this.elementWidth;
            this.elementsOnRight += this.feasibleElments;
        }else
        {
            //have to scorll what left on left side of screen
            tranlationX = this.elementsOnLeft *this.elementWidth;
            this.elementsOnRight += this.elementsOnLeft;
            this.elementsOnLeft = 0;
        }

        //set state with updated translation.
        this.setState({tranlateX: (-(this.state.tranlateX+tranlationX))});
    }

    
    scrollLeft(e){
        //return if nothing left to scroll on right
        if(this.elementsOnLeft+this.feasibleElments>= this.totalElements){
             return null;
        }
        this.elementsOnRight = this.totalElements - this.feasibleElments - this.elementsOnLeft;
        
        let tranlationX = 0;
        if(this.elementsOnRight >= this.feasibleElments){
            //have to scroll all the feasible items
            tranlationX = this.feasibleElments*this.elementWidth;
            this.elementsOnLeft += this.feasibleElments;
        }else{
            //have to scorll what left on right side of screen
            tranlationX = this.elementsOnRight *this.elementWidth;
            this.elementsOnLeft += this.elementsOnRight;
            this.elementsOnRight = 0;
        }
        //set state with updated translation.
        this.setState({tranlateX: ((this.state.tranlateX+tranlationX))});
    }

    closeVideoExpand(e){
        this.setState({expandedVideoId:0, selectedVideo: {}})
    }

    onVideoExpanded(video){
        this.setState({expandedVideoId: video.id, selectedVideo: video});
    }

    render() {
        if(!this.props.category.title || !this.props.videos) return null;
        const styles = { 
            transform: `translate(${this.state.tranlateX}px)` 
        };
        
        const selectedVideo = {contentRating: "PG-13",
        createdAt: "2020-06-07T02:41:00.809Z",
        description: "Mission: Impossible is a series of American action spy films both based on and a follow-on from the television series of the same name created by Bruce Geller. The series is co-produced by and stars Tom Cruise, whose character is Ethan Hunt, an agent of the Impossible Missions Force.",
        id: 44,
        runtime: 5400,
        thumbnailUrl: "https://i.pinimg.com/236x/98/a9/86/98a986ed1761a2b11990912fa1921983.jpg",
        title: "Mission: Impossible - Fallout",
        videoRating: "7",
        videoType: "movies",
        videoUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.ogv",
        year: 2018 }
        return (
            <div className="category-container">
                <h1 className="category-title">{this.props.category.title}</h1>
                <div className="category-video-main"  onMouseEnter={this.changeArrowVisiblity} onMouseLeave={this.changeArrowVisiblity}>
                    <span className={`video-carousel-left video-carousel-arrow ${!this.state.arrows ? "hidden" : ""}`} onClick={this.scrollLeft}><FontAwesomeIcon icon={faChevronLeft}/></span>
                    <div className={`category-videos-container`} id={this.props.category.title+"main"} style={styles}>
                        {
                            this.props.videos.map((video, idx)=>{
                                return (
                                        <VideoConatiner 
                                        video={video} 
                                        key={idx} 
                                        onVideoExpanded={this.onVideoExpanded}
                                        expandedVideoId={this.state.expandedVideoId}
                                         />
                                )
                            })
                        }
                    </div>
                    <span className={`video-carousel-right video-carousel-arrow ${!this.state.arrows ? "hidden" : ""}`} onClick={this.scrollRight}><FontAwesomeIcon icon={faChevronRight}/></span>
                </div>
                <div className={!this.state.expandedVideoId ? "hidden" : "category-video-details-conatiner"}>
                        <div className="category-video-details">
                            <h1 className="category-video-details-title">{selectedVideo.title}</h1>
                            <span className="category-video-details-content-rating">{selectedVideo.contentRating}</span>
                            <p className="category-video-details-desc">{selectedVideo.description}</p>
                            <div className="category-video-details-buttons">
                                <button className="category-video-play"><FontAwesomeIcon className="icon-right-margin" icon={faPlay}/>Play</button>
                                <button className="category-video-add-to-list"><FontAwesomeIcon className="icon-right-margin" icon={faPlus}/>My List</button>
                            </div>
                        </div>
                        <div className="category-video-gradient">

                        </div>
                        <div className="category-video-player">
                            <video poster={selectedVideo.thumbnailUrl} src={selectedVideo.videoUrl} autoPlay muted loop/>
                        </div>
                        <span className="cross" onClick={this.closeVideoExpand}><FontAwesomeIcon icon={faTimesCircle} size="lg"/></span>
                </div>
            </div>
        );
    }
}

export default Category;