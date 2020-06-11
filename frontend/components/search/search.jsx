import React, { Component } from 'react';
import { searchByName } from '../../actions/video/video_action';
import {connect} from 'react-redux';
import { filterForSearch } from '../../util/selectors/selector';
import {withRouter} from 'react-router-dom';
import SearchVideoList from './search_video_list';
class Search extends Component {
   
    constructor(props){
        super(props);

        this.debounceTimer =undefined;
        this.debounce = this.debounce.bind(this);
    }

    componentDidMount(){
        console.log("component Did mount")
        const query = this.props.query; 
        this.props.searchByName(query);
    }

    componentDidUpdate(prevState){
        console.log("component Did update")
        const query = this.props.query; 
        if(prevState.query != query){
            this.debounce(()=>{
                console.log("triggering query")
                if(query.length > 0)
                    this.props.searchByName(query)
            }, 1000)();
        }
    }

    debounce(func, delay){ 
        return ()=> { 
            // debugger
            if(this.debounceTimer)
                clearTimeout(this.debounceTimer) 
            this.debounceTimer  = setTimeout(func, delay) 
        } 
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
                          <p className="nothing-found-text">{`Your search for "${this.props.query}" did not have any matches.`}</p>
                            <p className="nothing-found-text">Suggestions:</p>
                            <ul className="nothing-found-text">
                                <li>Try different keywords</li>
                                <li>Looking for a movie or TV show?</li>
                                <li>Try using a movie, TV show title, actor, or director</li>
                                <li>Try a genre, like comedy, action, romance</li>
                            </ul>
                      </div> 
                    }
                </div>
            </div>
        );
    }
}

const mSTP = (state, ownProps)=>{
    // debugger
    return{
        query: ownProps.match.params.query,
        videos: filterForSearch(state, ownProps.match.params.query)
    }
}

const mDTP = (dispatch)=>{
    return{
        searchByName:(query)=>dispatch(searchByName(query)),
    }
}



export default withRouter(connect(mSTP,mDTP)(Search));