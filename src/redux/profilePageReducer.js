import {usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
    postsState: [
        {id: 1, message: 'How are you ?', likescount: 3},
        {id: 2, message: 'We will rock U', likescount: 10},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 4, message: 'Check my Greets', likescount: 0},
    ],
    newPostText: "",
    profile: null
};


const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsState: [{id: 5, message: state.newPostText, likescount: 0}, ...state.postsState]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});


export const getProfileThunk = (userId) =>{

    return(dispatch) => {

        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
}

export default profilePageReducer;