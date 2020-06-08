import {connect} from 'react-redux';
import { topVideo } from '../../../util/selectors/selector';
import {fetchVideo} from '../../../actions/video/video_action'
import TopVideo from './top_video';

const mSTP = (state, ownProps)=>{
    return {
        topVideo: topVideo(state, ownProps.type),
    }
}

const mDTP =  (dispatch)=>{
    return {
        fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
    }
}

export default connect(mSTP, mDTP)(TopVideo);