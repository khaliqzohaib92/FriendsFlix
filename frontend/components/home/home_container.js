import { connect } from 'react-redux';
import Home from './home'
import { CURRENT_PROFILE_ID } from '../../util/constants';
import { fetchVideosByGenre } from '../../actions/video/video_action'
import { fetchCategories } from '../../actions/category/category_action'
import { withRouter } from 'react-router-dom'
import { fetchGenres } from '../../actions/genre/genre_action';
import { fetchMyLists } from '../../actions/mylist/mylist_action'
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
        fetchCategories:()=>dispatch(fetchCategories()),
        fetchGenres:()=>dispatch(fetchGenres()),
        fetchVideosByGenre:(genreId, type)=>dispatch(fetchVideosByGenre(genreId, type)),
        fetchMyLists:(profileId)=>dispatch(fetchMyLists(profileId))
    };
};

export default withRouter(connect(mSTP, mDTP)(Home));