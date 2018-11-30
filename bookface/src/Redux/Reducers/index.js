import {combineReducers} from 'redux';
import {postsReducer} from './Posts.reducer';

export const state = combineReducers({
   posts: postsReducer
});