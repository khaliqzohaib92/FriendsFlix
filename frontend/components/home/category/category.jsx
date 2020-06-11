import React, { Component } from 'react';
import VideoConatiner from '../video/video_container';


import {filterVideosByCategory} from '../../../util/selectors/selector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import VideoDetails from '../video/video_details';
import { findType } from '../../../util/util';

class Category extends Component {

    constructor(props){
        super(props);
        this.state={arrows: false, tranlateX: 0, expandedVideoId: 0, selectedVideo:{}};

        this.init();
        this.changeArrowVisiblity = this.changeArrowVisiblity.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.onVideoExpanded = this.onVideoExpanded.bind(this);
        this.closeVideoExpand = this.closeVideoExpand.bind(this);
    }

    init(){
        this.elementsOnRight = 0;
        this.elementsOnLeft = 0;
        this.elements = null;
        this.totalElements = null;
        this.feasibleElments = null;
        this.elementWidth = 0;
    }

    componentDidUpdate(prevprops){
        if(this.props.location.pathname!= prevprops.location.pathname ||
             prevprops.genre.id != this.props.genre.id){
            this.init();
            this.setState({tranlateX: 0});
            this.setState({arrows:false});
            this.setState({expandedVideoId: 0});
            this.setState({selectedVideo: {}});
        }
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
        this.setState({tranlateX: ((this.state.tranlateX-tranlationX))});
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
        // debugger
        const videos = filterVideosByCategory(this.props.videos, this.props.category.videoIds, findType(this.props.location.pathname), this.props.genre.id);
        const selectedVideo = this.state.selectedVideo;
        return (
            <div className="category-container">
                <h1 className="category-title">{this.props.category.title}</h1>
                <div className="category-video-main"  onMouseEnter={this.changeArrowVisiblity} onMouseLeave={this.changeArrowVisiblity}>
                    <span className={`video-carousel-left video-carousel-arrow ${!this.state.arrows ? "hidden" : ""}`} onClick={this.scrollLeft}><FontAwesomeIcon icon={faChevronLeft}/></span>
                    <div className={`category-videos-container`} id={this.props.category.title+"main"} style={styles}>
                        {
                            videos.map((video, idx)=>{
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
                <VideoDetails expandedVideoId={this.state.expandedVideoId} selectedVideo={selectedVideo} closeVideoExpand={this.closeVideoExpand}/>
            </div>
        );
    }
}

export default Category;