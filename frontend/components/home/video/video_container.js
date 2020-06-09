import {connect} from 'react-redux';
import {fetchVideo} from '../../../actions/video/video_action'
import Video from './video';

const mSTP = (state, ownProps)=>{
    return {
        video: ownProps.video,
        expandedVideoId: ownProps.expandedVideoId,
    }
}

const mDTP =  (dispatch, ownProps)=>{
    return {
        fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
        onVideoExpanded: (video)=>ownProps.onVideoExpanded(video),
    }
}

export default connect(mSTP, mDTP)(Video);