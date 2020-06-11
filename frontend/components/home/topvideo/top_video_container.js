import {connect} from 'react-redux';
import { topVideo } from '../../../util/selectors/selector';
import {fetchVideo, fetchVideosByGenre} from '../../../actions/video/video_action'
import TopVideo from './top_video';
import {withRouter} from 'react-router-dom';
import { findType } from '../../../util/util';
const mSTP = (state, ownProps)=>{
    return {
        topVideo: topVideo(ownProps.videos, findType(ownProps.location.pathname), ownProps.genre.id),
        genres: Object.values(state.entities.genres),
    }
}

const mDTP =  (dispatch)=>{
    return {
        fetchVideo: (videoId)=>dispatch(fetchVideo(videoId)),
        fetchVideosByGenre:(genreId, type)=>dispatch(fetchVideosByGenre(genreId, type))
    }
}

export default withRouter(connect(mSTP, mDTP)(TopVideo));