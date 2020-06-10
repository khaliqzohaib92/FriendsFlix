import {connect} from 'react-redux';
import Category from './category';
import {withRouter} from 'react-router-dom'
import {fetchVideosByType} from '../../../actions/video/video_action'



const mDTP =  (dispatch)=>{
    return {
        fetchVideosByType: (type)=>dispatch(fetchVideosByType(type)),
    }
}

export default withRouter(connect(null, mDTP)(Category)); 