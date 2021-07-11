import React from "react";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return{
        postsState:state.profilePage.postsState,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            dispatch(updateNewPostText(text));
        },
        addPostActionCreator: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;