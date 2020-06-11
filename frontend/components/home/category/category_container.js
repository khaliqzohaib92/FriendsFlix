import {connect} from 'react-redux';
import Category from './category';
import {withRouter} from 'react-router-dom'



const mDTP =  (dispatch)=>{
    return {
    }
}

export default withRouter(connect(null, mDTP)(Category)); 