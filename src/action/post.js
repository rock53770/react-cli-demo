// import { createAction } from 'redux-actions';
// import * as types from '../constant/actiontype';
// import * as postService from '../service/postService';

export const createPostAction = function (num){

  
  return (dispatch,getState) => {
    dispatch({
      type:'posts',
      posts:{
        aa:num
      }
    })
    return 12345
  }
  
}

