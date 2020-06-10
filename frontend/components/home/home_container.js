import {connect} from 'react-redux';
import Home from './home'
import { CURRENT_PROFILE_ID } from '../../util/constants';
import {fetchVideos, fetchVideosByType} from '../../actions/video/video_action'
import {fetchCategories} from '../../actions/category/category_action'
import {withRouter} from 'react-router-dom'
import { fetchGenres } from '../../actions/genre/genre_action';
const mSTP = (state)=>{
    return {
        currentProfileId: state.session[CURRENT_PROFILE_ID],
        videos: state.entities.videos,
        categories: Object.values(state.entities.categories),
        genres: Object.values(state.entities.genres),
    };
};


const mDTP = (dispatch)=>{
    return{
        fetchVideos:()=>dispatch(fetchVideos()),
        fetchCategories:()=>dispatch(fetchCategories()),
        fetchGenres:()=>dispatch(fetchGenres()),
        fetchVideosByType:(type)=>dispatch(fetchVideosByType(type)),
    };
};

export default withRouter(connect(mSTP, mDTP)(Home));