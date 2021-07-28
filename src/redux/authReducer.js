import {authAPI, usersAPI} from "../api/api";

const AUTH_USER_DATA = "AUTH_USER_DATA";
const PROFILE_INFO = "PROFILE_INFO";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true

            }
        case PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}


export const setAuthUser = (id, email, login,isAuth) => ({type: AUTH_USER_DATA, payload: {id, email, login, isAuth}});
export const setCurrentUserInfo = (profile) => ({type: PROFILE_INFO, profile});


export const authMeThunk = () => {

    return (dispatch) => {

        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUser(id, email, login, true));
                    usersAPI.getProfile(id)//my id or may past hardCode userId, cause no-info of my profile
                        .then(response => {
                            dispatch(setCurrentUserInfo(response.data));
                        })
                }

            })

    }
}


export const loginThunk = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMeThunk());
                }
            })
    }
}

export const logoutThunk = () => {

    return (dispatch) => {

        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false));
                }
            })
    }
}

export default authReducer;