import React, { Component } from 'react';
import VideoConatiner from '../video/video_container';

class Category extends Component {
    render() {
        // 
        if(!this.props.category.title || !this.props.videos) return null;
        return (
            <div className="category-container">
                <h1 className="category-title">{this.props.category.title}</h1>
                <div className="category-videos-container">
                    {
                        this.props.videos.map((video, idx)=>{
                            
                            return (
                                <VideoConatiner video={video} key={idx}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Category;