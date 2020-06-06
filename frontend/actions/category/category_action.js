import * as CategoryApiUtlis from '../../util/category/category_api_utils';
import {errorMessages} from '../../util/util'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_ERRORS = "RECEIVE_CATEGORY_ERRORS";

const receiveCatgories = (categories)=>{
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}


const receiveCategoryErrors=(errors)=>{
    return{
        type:RECEIVE_CATEGORY_ERRORS,
        errors
    }
}

//thunk action creators

export const fetchCategories = ()=>dispatch=>{
    return CategoryApiUtlis.fetchCategories()
    .then(
        categories=>dispatch(receiveCatgories(categories)),
        errors=>dispatch(receiveCategoryErrors(errorMessages(errors))));
}
