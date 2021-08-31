import {profileAPI} from "../api/api";

const ADD_POST = "network/profile/ADD-POST";
const SET_USERS_PROFILE = "network/profile/SET_USERS_PROFILE";
const SET_USERS_STATUS = "network/profile/SET_USERS_STATUS";
const SET_USER_ABOUT = "network/profile/SET_USER_ABOUT";
const SET_MAIN_PHOTO = "network/profile/SET_MAIN_PHOTO";
const TOGGLE_IS_DOWNLOAD = "network/profile/TOGGLE_IS_DOWNLOAD";

let initialState = {
    postsState: [
        {id: 1, message: 'How are you ?', likescount: 3},
        {id: 2, message: 'We will rock U', likescount: 10},
        {id: 3, message: 'Check my Git', likescount: 0},
        {id: 4, message: 'Check my Greets', likescount: 0},
    ],
    profile: null,
    status: '',
    aboutMe: null,
    isDownload:false
};


const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsState: [...state.postsState, {id: 5, message: action.postText, likescount: 0}]
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_USERS_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_ABOUT:
            return {
                ...state,
                aboutMe: action.aboutMe,
            }
        case SET_MAIN_PHOTO:
            return {...state, profile: {...state.profile,photos:action.file}
            }
        case TOGGLE_IS_DOWNLOAD: {
            return {
                ...state,
                isDownload: action.isDownload
            }
        }
        default:
            return state;
    }
}


export const addPostAC = (postText) => ({type: ADD_POST, postText: postText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const setUserAbout = (aboutMe) => ({type: SET_USER_ABOUT, aboutMe});
export const setMainPhoto = (file) => ({type: SET_MAIN_PHOTO, file});
export const toggleIsDownLoad = (isDownload) => ({type: TOGGLE_IS_DOWNLOAD, isDownload});


export const getProfileThunk = (userId) => {

    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUsersProfile(response.data));
    }
}
export const getUsersStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setUsersStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUsersStatus(status));
        }
    }
}
export const savePhotoThunk = (file) =>  async (dispatch) => {
        dispatch(toggleIsDownLoad(true));
        let response = await profileAPI.setMainPhotoApi(file);
        dispatch(toggleIsDownLoad(false));
        if (response.data.resultCode === 0) {
            dispatch(setMainPhoto(response.data.data.photos));
        }

}

export const updateUserAbout = (aboutMe, FullName, LookingForAJobDescription, contacts) => {
    return async (dispatch) => {
        let response = await profileAPI.updateAboutMe(aboutMe, FullName, LookingForAJobDescription, contacts);
        if (response.data.resultCode === 0) {
            dispatch(setUserAbout(aboutMe));
        }
    }
}

export default profilePageReducer;