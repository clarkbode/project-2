import {FETCH_POSTS} from './types';
import BookFaceClient from '../../AxiosClients/bookFaceLeague';

export const fetchPosts = () => (dispatch) => {
   
   // console.log("I'm called!");
      
   // BookFaceClient.get('posts')
   // .then(posts => {
   //    dispatch({
   //       type: FETCH_POSTS,
   //       payload: posts
   //    })
   //    console.log(posts);
   // }) 


   console.log("I'm called!");
      fetch('http://localhost:8088/posts')
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
   
  
