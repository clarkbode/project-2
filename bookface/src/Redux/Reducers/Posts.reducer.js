import {FETCH_POSTS} from '../Actions/types';
import {FETCH_POSTER_INFO} from  '../Actions/types';


const initialState = {
   posts: [],
   posterInfo: []
}

export const postsReducer =  (state = initialState, action) => {
   
   console.log("are you at least called!")
   
   switch(action.type){
      
      case FETCH_POSTS:
         return{
            ...state,
            posts: action.payload
         }
      case FETCH_POSTER_INFO:
      return{
         ...state,
         posterInfo: action.payload
      }
      default:
         break;
         
   }
   return state;
}