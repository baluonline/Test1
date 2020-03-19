import _ from 'lodash';
import jsonPlaceholders from './../apis';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    // const userIds = _.uniq(_.map(getState().posts,"userId"))
    // userIds.forEach(id => dispatch(fetchUser(id)));

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async dispatch => {
    const resp = await jsonPlaceholders.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: resp.data});
}

// Without memoize
export const fetchUser = id => async dispatch => {
    const resp = await jsonPlaceholders.get('/users/' + id);
    dispatch({type: 'FETCH_USER', payload: resp.data})
}

/* 
// with memoize solution to not make duplicate calls

export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
const _fetchUser= _.memoize(async (id,dispatch) => {
    const resp = await jsonPlaceholders.get('/users/' + id);
    dispatch({type: 'FETCH_USER', payload: resp.data});
});
 */