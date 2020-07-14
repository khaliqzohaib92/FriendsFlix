import {connect} from 'react-redux';
import {fetchVideo} from '../../../actions/video/video_action'
import Video from './video';
import {withRouter} from 'react-router-dom';
import { addToMyList, deleteMyListItem } from '../../../actions/mylist/mylist_action'
import { CURRENT_PROFILE_ID } from '../../../util/constants';

const mSTP = (state, ownProps)=>{
    return {
        currentProfileId: state.session[CURRENT_PROFILE_ID],
        video: ownProps.video,
        expandedVideoId: ownProps.expandedVideoId,
    }
}

const mDTP =  (dispatch, ownProps)=>{
    return {
        fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
        onVideoExpanded: (video)=>ownProps.onVideoExpanded(video),
        addToMyList: (mylist)=>dispatch(addToMyList(mylist)),
        deleteMyListItem: (videoId)=>dispatch(deleteMyListItem(videoId)),
    }
}

export default withRouter(connect(mSTP, mDTP)(Video));