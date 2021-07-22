import {usersAPI} from "../api/api";

const AUTH_USER_DATA = "AUTH_USER_DATA";
const PROFILE_INFO = "PROFILE_INFO";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    profile: null
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
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


export const setAuthUser = (id,email,login) => ({type:AUTH_USER_DATA,data:{id,email,login} });
export const setCurrentUserInfo = (profile) => ({type:PROFILE_INFO, profile });



export const authMeThunk = () => {

    return(dispatch) =>{

        usersAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUser(id, email, login));
                    usersAPI.getProfile(2)//my id or may past hardCode userId, cause no-info of my profile
                        .then(response => {
                            dispatch(setCurrentUserInfo(response.data));
                        })
                }

            })

    }
}

export default authReducer;