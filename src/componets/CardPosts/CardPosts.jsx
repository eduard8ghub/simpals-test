import React from 'react';
import {Button} from "react-bootstrap";

const CardPosts = ({posts, onDeletePost}) => {
    return (
        <>
            {
                posts.map(itemPost => (
                    <div id="posts" className="well card card-body bg-light" key={itemPost.id}>
                        <article>
                            <header>
                                <h3>{itemPost.title}</h3>
                            </header>
                            <section>
                                <p>{itemPost.body}</p>
                            </section>
                            <footer>
                                <div className="tags">
                                    {
                                        itemPost.tags.map((itemTag, index) => (
                                            <Button variant="outline-secondary" size="sm" key={index}>{itemTag}</Button>
                                        ))
                                    }
                                </div>
                            </footer>
                            <div className="controls">
                                <button
                                    className="btn btn-danger btn-mini"
                                    onClick={() => {onDeletePost(itemPost.id)}}
                                >удалить</button>
                            </div>
                        </article>
                    </div>
                ))
            }
        </>
    );
};

export default CardPosts;