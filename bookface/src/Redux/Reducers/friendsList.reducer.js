import {FETCH_FREINDS_LIST} from  '../Actions/types';


const initialState = {
   friendsList: [{}]
}

export const friendsListReducer =  (state = initialState, action) => {
   
   console.log("You're here to fetch Friends list!");
   
   switch(action.type){
      case FETCH_FREINDS_LIST:
         return{
            ...state,
            friendsList: action.payload.friendsList
         }
      default:
         break;
         
   }
   return state;
}