import {combineReducers} from 'redux';
import productsReducer from './productsReducers';
// import usersReducer from './usersReducer';
import fetchPosts from './fetchPosts';
import fetchUser from './fetchUser';

export const allReducer = combineReducers({
    products:productsReducer,
    // user:usersReducer,
    posts:fetchPosts,
    users:fetchUser
});