import {FETCH_POSTS} from './types';
import BookFaceClient from '../../AxiosClients/bookFaceLeague';

export const fetchPostComments = () => (dispatch) => {
 
    console.log("I'm called!");
       fetch('http://localhost:8088/comment/findByPost/id/3')
       .then(res => res.json())
       .then(posts => {
          console.log("dispatching")
          dispatch({
             type: FETCH_POSTS,
             payload: posts
          })
          console.log(posts);  
    }) 
 };