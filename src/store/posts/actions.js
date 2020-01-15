import {testAPI} from "../../api/api";
import {reset} from 'redux-form';

export const SET_POSTS = "SET_POSTS";
export const SET_DELETE_POST = "SET_DELETE_POST";
export const SET_ADD_POST = "SET_ADD_POST";


export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts
});

export const setDeletePost = (id) => ({
    type: SET_DELETE_POST,
    payload: id
});

export const setAddPost = (post) => ({
    type: SET_ADD_POST,
    payload: post
});



//--------------------------------------------------------------------

export const onGetPosts = () => (dispatch) => {
    testAPI.getPosts()
        .then(data => {
            dispatch(setPosts(data))
        })
};

export const onDeletePost = (id) => (dispatch) => {
    testAPI.deletePost(id)
        .then(() => {
            dispatch(setDeletePost(id))
        })
};
export const onAddPost = (title, body, tags) => (dispatch) => {
    testAPI.addPost(title, body, tags)
        .then((data) => {
            dispatch(setAddPost(data));
            dispatch(reset('addPost'));
        })
};