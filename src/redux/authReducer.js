import {authAPI, profileAPI} from "../api/api";

const AUTH_USER_DATA = "network/auth/AUTH_USER_DATA";
const PROFILE_INFO = "network/profile/PROFILE_INFO";


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


export const setAuthUser = (id, email, login, isAuth, profile) => ({
    type: AUTH_USER_DATA,
    payload: {id, email, login, isAuth, profile}
});
export const setCurrentUserInfo = (profile) => ({type: PROFILE_INFO, profile});


export const authMeThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUser(id, email, login, true));
            {let response = await profileAPI.getProfile(id);//my id or may past hardCode userId, cause no-info of my profile
            dispatch(setCurrentUserInfo(response.data))}

        }
    }
}


export const loginThunk = (email, password, rememberMe, setSubmitting, setFieldError, setStatus, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(authMeThunk());
        }
        if (response.data.resultCode === 10) {
            setStatus(response.data.messages)
            authAPI.getCaptcha()
                .then(response => {
                    setSubmitting(response.data.url)
                })
        } else {
            setStatus(response.data.messages)
        }

    }
}

export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false, null));
                }
            })
    }
}


export default authReducer;