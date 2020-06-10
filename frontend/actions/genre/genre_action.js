import * as GenreApiUtils from '../../util/genre/genre_api_utils';


export const RECEIVE_GENRES = "RECEIVE_GENRES";

const receiveGenres = (genres)=>{
  return{  
      type: RECEIVE_GENRES,
      genres 
  } 
}

//thunk action creators
export const fetchGenres = ()=>dispatch=>{
    return GenreApiUtils.fetchGenres()
        .then((genres)=>dispatch(receiveGenres(genres)));
}