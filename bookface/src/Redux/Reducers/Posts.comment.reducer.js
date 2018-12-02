import {FETCH_COMMENTS} from '../Actions/types';


const initialState = {
   comments: []
}

export const commentsReducer =  (state = initialState, action) => {
   
   console.log("are you at least called!")
   
   switch(action.type){
      
      case FETCH_COMMENTS:
         return{
            ...state,
            comments: action.payload
         }
      default:
         break;
         
   }
   return state;
}