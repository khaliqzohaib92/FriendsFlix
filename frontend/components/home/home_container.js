import {connect} from 'react-redux';
import Home from './home'
import { CURRENT_PROFILE_ID } from '../../util/constants';
import {fetchVideos, fetchVideo} from '../../actions/video/video_action'
import {fetchCategories} from '../../actions/category/category_action'
const mSTP = (state)=>{
    console.log("home conainer mSTP");
    return {
        currentProfileId: state.session[CURRENT_PROFILE_ID],
        videos: Object.values(state.entities.videos),
        categories: Object.values(state.entities.categories),
    };
};


const mDTP = (dispatch)=>{
    return{
        fetchVideos:()=>dispatch(fetchVideos()),
        fetchCategories:()=>dispatch(fetchCategories()),
    };
};

export default connect(mSTP, mDTP)(Home);