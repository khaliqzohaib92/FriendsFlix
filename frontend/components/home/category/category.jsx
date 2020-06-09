import React, { Component } from 'react';
import VideoConatiner from '../video/video_container';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

class Category extends Component {

    constructor(props){
        super(props);

        this.state={arrows: false, tranlateX: 0};
        this.elementsOnRight = 0;
        this.elementsOnLeft = 0;
        this.elements = null;
        this.totalElements = null;
        this.feasibleElments = null;
        this.elementWidth = 0;
        this.changeArrowVisiblity = this.changeArrowVisiblity.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
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

    render() {
        if(!this.props.category.title || !this.props.videos) return null;
        const styles = { 
            transform: `translate(${this.state.tranlateX}px)` 
        };
        return (
            <div className="category-container">
                <h1 className="category-title">{this.props.category.title}</h1>
                <div className="category-video-main"  onMouseEnter={this.changeArrowVisiblity} onMouseLeave={this.changeArrowVisiblity}>
                    <span className={`video-carousel-left video-carousel-arrow ${!this.state.arrows ? "hidden" : ""}`} onClick={this.scrollLeft}><FontAwesomeIcon icon={faChevronLeft}/></span>
                    <div className={`category-videos-container`} id={this.props.category.title+"main"} style={styles}>
                        {
                            this.props.videos.map((video, idx)=>{
                                return (
                                        <VideoConatiner video={video} key={idx}/>
                                )
                            })
                        }
                    </div>
                    <span className={`video-carousel-right video-carousel-arrow ${!this.state.arrows ? "hidden" : ""}`} onClick={this.scrollRight}><FontAwesomeIcon icon={faChevronRight}/></span>
                </div>
            </div>
        );
    }
}

export default Category;