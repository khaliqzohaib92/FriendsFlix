import {connect} from 'react-redux';
import Category from './category';
import {filterVideosByCategory} from '../../../util/selectors/selector'

const mSTP = (state, ownProps)=>{
    // 
    return {
        category: ownProps.category,
        videos: Object.keys(state.entities.videos).length > 0 ? 
        filterVideosByCategory(state, ownProps.category.videoIds) :
        undefined
    }
}

const mDTP =  (dispatch)=>{
    return {
    }
}

export default connect(mSTP, mDTP)(Category);