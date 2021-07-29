import {addPostAC} from "../../../redux/profilePageReducer";
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
        addPost: (postText) => {
            dispatch(addPostAC(postText));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts);
