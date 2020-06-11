import React, { Component } from 'react';

import VideoConatiner from '../home/video/video_container';
import VideoDetails from '../home/video/video_details';
class SearchVideoList extends Component {
    constructor(props){
        super(props);
        this.state= {expandedVideoId: 0, selectedVideo:{}};
        this.onVideoExpanded = this.onVideoExpanded.bind(this);
        this.closeVideoExpand = this.closeVideoExpand.bind(this);
    }


    onVideoExpanded(video){
        this.setState({expandedVideoId: video.id, selectedVideo: video});
    }

    closeVideoExpand(e){
        this.setState({expandedVideoId:0, selectedVideo: {}})
    }

    render() {
        return (
            <>
              <div className="category-videos-container search-result-row" id="search-Video-list">
                    {
                        this.props.videos.map((video, idx)=>{
                        return  <VideoConatiner 
                                        video={video} 
                                        key={idx} 
                                        onVideoExpanded={this.onVideoExpanded}
                                        expandedVideoId={this.state.expandedVideoId}
                                        />
                        })
                    }
                </div>
                <VideoDetails expandedVideoId={this.state.expandedVideoId} selectedVideo={this.state.selectedVideo} closeVideoExpand={this.closeVideoExpand}/>
               
            </>
        );
    }
}

export default SearchVideoList;