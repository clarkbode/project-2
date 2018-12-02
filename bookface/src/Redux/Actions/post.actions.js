import {FETCH_POSTS, POST_COMMENT_POST,FETCH_POSTER_INFO,FETCH_FREINDS_LIST} from './types';
import BookFaceClient from '../../AxiosClients/bookFaceLeague';

export const fetchPosts = () => (dispatch) => {
      //works 100%;
   console.log("I'm called!");
   fetch('http://localhost:8088/posts')
   .then(res => res.json())
   .then(posts => {
      console.log("dispatching");
      console.log(posts);
      dispatch({
         type: FETCH_POSTS,
         payload: posts
      })
      console.log(posts);  
   }) 
      // console.log("I'm called!");
      // fetch('http://localhost:8088/posts')
      // .then(res => res.json())
      // .then(posts => {
      //    console.log("dispatching");
      //    console.log(posts);
      //    let postSize = Object.keys(posts).length;
      //    console.log(postSize);
         
      //    for(let i = 0; i < postSize; i++){
      //       let authorId = posts[i].author_id;
      //       console.log(authorId);
      //       fetch(`http://localhost:8088/users/${authorId}`)
      //       .then(res => res.json())
      //       .then(posts => {
      //          console.log(posts);
      //       }
      //       )
      //    }
      
   };

export const composePostFetch = () => (dispatch)=> {
   

}

export const friendsListFetch = () => (dispatch) => {
   fetch('http://localhost:8088/users/id/1')
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



   
  
