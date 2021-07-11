import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let mapPostsData =
        props.postsState.map(postMessage => <Post message={postMessage.message} key={postMessage.id} likescount={postMessage.likescount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPostActionCreator();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
       props.updateNewPostText(text);

    }
    return (
        <div className={classes.mypost}>
            <div>
                <div><h3>My posts</h3></div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={() => {
                        onAddPost()
                    }}> Add post
                    </button>

                </div>
            </div>
            <div className={classes.divPost}>
                {mapPostsData}
            </div>
        </div>

    );
}
export default MyPosts;