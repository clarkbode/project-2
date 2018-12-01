import {FETCH_POSTS, POST_COMMENT_POST,FETCH_POSTER_INFO,FETCH_FREINDS_LIST} from './types';
import BookFaceClient from '../../AxiosClients/bookFaceLeague';

export const fetchPosts = () => (dispatch) => {
   
   // console.log("I'm called!");
   //****/For Axios******
   // BookFaceClient.get('posts')
   // .then(posts => {
   //    dispatch({
   //       type: FETCH_POSTS,
   //       payload: posts
   //    })
   //    console.log(posts);
   // }) 

   console.log("I'm called!");
         fetch('http://bookfaceapi-env.mbs3j2imdu.us-east-2.elasticbeanstalk.com/posts')
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

export const composePostFetch = () => (dispatch)=> {
   

}



export const friendsListFetch = () => (dispatch) => {
   fetch('http://bookfaceapi-env.mbs3j2imdu.us-east-2.elasticbeanstalk.com/users/1')
      .then(res => res.json())
      .then(friendsList => {
         console.log("dispatching")
         dispatch({
            type: FETCH_FREINDS_LIST,
            payload: friendsList
         })
         console.log(friendsList);  
   }) 
};

// console.log("I'm called!");
   //    fetch('http://localhost:8088/posts')
   //    .then(res => res.json())
   //    .then(posts => {
   //       dispatch({
   //          type: FETCH_POSTS,
   //             payload: posts
   //        })
   //      fetch('http://localhost:8088/users/1')
   //      .then(res => res.json())
   //      .then(posterInfo => {
   //           dispatch({
   //              type: FETCH_POSTER_INFO,
   //              payload: posterInfo,
   //           })
   //        })
        
   // }) 


   
  
