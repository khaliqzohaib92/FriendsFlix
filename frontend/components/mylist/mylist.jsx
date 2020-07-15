import React, { Component } from 'react';
import { fetchMyListVideos } from '../../util/selectors/selector';
import { connect } from 'react-redux';
import SearchVideoList from '../search/search_video_list';


class MyList extends Component {
    
    constructor(props){
        super(props);

    }

    makeSlices(videos, elementToSkip = 6){
        if(Object.values(videos).length ==0){
            return (
                <>
                </>
            )
        }
        return (
            <>
            <div className='search-video-list-contianer'>
                <SearchVideoList videos={videos.slice(0, elementToSkip)}/>
            </div>
            <>
                {
                    this.makeSlices(videos.slice(elementToSkip), elementToSkip)
                }
            </>
            </>
        )
    }

    render() {
        return (
            <div className="search-result-contianer">
                <div className="search-results">
                    {
                      this.props.videos.length > 0 ? this.makeSlices(this.props.videos) :
                      <div className="nothing-found-container">
                            <p className="nothing-found-text">Add some videos to your list!</p>
                      </div> 
                    }
                </div>
            </div>
        );
    }
}

const mSTP = (state) => {
    return {
        videos: fetchMyListVideos(state.entities.mylist, state.entities.videos)
    }
}

export default connect(mSTP, null)(MyList);