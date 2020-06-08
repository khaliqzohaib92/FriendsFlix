import {connect} from 'react-redux';
import {fetchVideo} from '../../../actions/video/video_action'
import Video from './video';

const mSTP = (state, ownProps)=>{
    return {
        video: ownProps.video
    }
}

const mDTP =  (dispatch)=>{
    return {
        fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
    }
}

export default connect(mSTP, mDTP)(Video);