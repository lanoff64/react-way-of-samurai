import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (

        <div className={classes.item}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src='https://topmsg.ru/wp-content/uploads/anonymous.jpg' alt='avatar picture'/>
            {props.message}
            <div className={classes.like}>
                <span>like: </span> {props.likescount}
            </div>
        </div>


    );
}
export default Post;