import {FETCH_FREINDS_LIST} from './types';

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