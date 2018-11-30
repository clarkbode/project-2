import {combineReducers} from 'redux';
import {postsReducer} from './Posts.reducer';
import {composePostsReducer} from './composePosts.reducer';

export const state = combineReducers({
   posts: postsReducer,
   inputCommnet: composePostsReducer
});