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


export default authReducer;