import { combineReducers } from "redux";
import {postsReducer} from "./posts/reducer";
import {reducer as formReducer} from "redux-form";



export default combineReducers ({
    posts: postsReducer,
    form: formReducer
})