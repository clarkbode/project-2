import {POST_COMMENT_POST} from '../Actions/types';


const initialState = {
   inputComment: 'fafsa'
}

export const composePostsReducer =  (state = initialState, action) => {
   switch(action.type){
      
      case POST_COMMENT_POST:
         
      return Object.assign({}, state, {inputComment: action.payload});
      
      default:
         break;
         
   }
   return state;
}