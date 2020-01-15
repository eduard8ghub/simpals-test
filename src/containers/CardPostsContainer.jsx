import React, {Component} from 'react';
import CardPosts from "../componets/CardPosts/CardPosts";
import {connect} from "react-redux";
import {onDeletePost, onGetPosts} from "../store/posts/actions";

const mapStateToProps = ({posts}) => ({
    posts: posts.posts
});

class CardPostsContainer extends Component {
    componentDidMount() {
        this.props.onGetPosts()
    }

    render() {
        return (
            <>
                {
                    this.props.posts && <CardPosts posts={this.props.posts} onDeletePost={this.props.onDeletePost}/>
                }
            </>
        );
    }
}

export default connect(mapStateToProps, {onGetPosts, onDeletePost})(CardPostsContainer);