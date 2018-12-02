import {combineReducers} from 'redux';
import {postsReducer} from './Posts.reducer';
import { commentsReducer } from './Posts.comment.reducer';

export const state = combineReducers({
   posts: postsReducer,
   comments: commentsReducer
});