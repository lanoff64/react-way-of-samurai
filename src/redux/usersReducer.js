import {usersAPI} from "../api/api";
import {updateObjInArray} from "../utils/objHelper";

const FOLLOW = "network/users/FOLLOW";
const UNFOLLOW = "network/users/UNFOLLOW";
const SET_USERS = "network/users/SET_USERS";
const SET_CURRENT_PAGE = "network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "network/users/TOGGLE_IS_FETCH";
const TOGGLE_IS_FOLLOWING_PROGRESS = "network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pagesSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetch: false,
    followingInProgress: [],
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users,action.userId,'id', {followed:true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users,action.userId,'id', {followed:false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }

        }
        case TOGGLE_IS_FETCH: {
            return {
                ...state,
                isFetch: action.isFetch
            }

        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching ?
                        [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetch = (isFetch) => ({type: TOGGLE_IS_FETCH, isFetch});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


export const requestUsers = (page, pagesSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetch(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pagesSize);
        dispatch(toggleIsFetch(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}


export const follow = (userId) => {
    return (dispatch) => {
        followUnfollowFlow(dispatch, userId,usersAPI.followUser.bind(usersAPI),followSuccess);
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
       followUnfollowFlow(dispatch, userId,usersAPI.unFollowUser.bind(usersAPI),unfollowSuccess);
        dispatch(toggleFollowingProgress(true, userId));
    }
}

export default usersReducer;