import {FETCH_POSTS} from '../Actions/types';


const initialState = {
   posts: []
}

export const postsReducer =  (state = initialState, action) => {
   
   console.log("are you at least called!")
   
   switch(action.type){
      
      case FETCH_POSTS:
         return{
            ...state,
            posts: action.payload
         }
      default:
         break;
         
   }
   return state;
}