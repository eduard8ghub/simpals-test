import React, {Component} from 'react';
import AddPost from "../componets/AddPost/AddPost";
import {connect} from "react-redux";
import {onAddPost} from "../store/posts/actions";

const mapStateToProps = (state) => ({});

class AddPostContainer extends Component {
    render() {
        return (
            <AddPost onAddPost={this.props.onAddPost}/>
        );
    }
}

export default connect(mapStateToProps, {onAddPost})(AddPostContainer);