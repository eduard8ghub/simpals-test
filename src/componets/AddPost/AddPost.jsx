import React from 'react';
import {Field, reduxForm} from "redux-form";
import {RenderInput} from "../Common/FormControls/renderField";
import {required} from "../Common/FormControls/validators";

const AddPost = ({onAddPost}) => {

    let addPost = (value) => {
        let tags = value.tags.split(',');
        onAddPost(value.title, value.body, tags);
    };

    return (
        <PostForm onSubmit={addPost}/>
    );
};


let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} id="post-add" className="col-lg-12">
            <div className="form-group">
                <Field name="title" type="text" component={RenderInput} placeholder="заголовок" validate={[required]}/>
            </div>
            <div className="form-group">
                <Field name="body" type="text" component={RenderInput} placeholder="запись" validate={[required]}/>
            </div>
            <div className="form-group">
                <Field name="tags" type="text" component={RenderInput} placeholder="тег, еще тег" validate={[required]}/>
            </div>
            <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
    );
};

PostForm = reduxForm({form: "addPost"})(PostForm);

export default AddPost;

