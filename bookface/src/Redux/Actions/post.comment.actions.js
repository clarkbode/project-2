import {FETCH_COMMENTS} from './types';

export const fetchPostComments = () => (dispatch) => {
 
    console.log("I'm called!");
       fetch('http://localhost:8088/comment/findByPost/id/3')
       .then(res => res.json())
       .then(comments => {
          console.log("dispatching")
          dispatch({
             type: FETCH_COMMENTS,
             payload: comments
          })
    }) 
 };