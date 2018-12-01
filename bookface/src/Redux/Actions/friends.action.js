import {FETCH_FREINDS_LIST} from './types';

export const friendsListFetch = () => (dispatch) => {
   fetch('http://localhost:8088/users/1')
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