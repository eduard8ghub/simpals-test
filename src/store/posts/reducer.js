import {SET_ADD_POST, SET_DELETE_POST, SET_POSTS} from "./actions";


const defaultState = {
    posts: null,

};

export const postsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            };
        case SET_DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(itemPost => itemPost.id !== action.payload)]
            };
        case SET_ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        default:
            return state;
    }
};

