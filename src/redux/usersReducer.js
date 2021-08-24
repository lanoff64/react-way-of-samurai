import {usersAPI} from "../api/api";

const FOLLOW = "network/users/FOLLOW";
const UNFOLLOW = "network/users/UNFOLLOW";
const SET_USERS = "network/users/SET_USERS";
const SET_CURRENT_PAGE = "network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "network/users/TOGGLE_IS_FETCH";
const TOGGLE_IS_FOLLOWING_PROGRESS = "network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [ ],
    pagesSize: 100,
    totalUsersCount: 0,
    currentPage:1,
    isFetch: false,
    followingInProgress: [],
    // fake: 10 //for test reselectors
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        // case "FAKE" : return {...state, fake: state.fake + 1} //test reselecors
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }
                   return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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

        }case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id => id !== action.userId)
            }

        }
        default:
            return state;
    }
}


export const followSuccess  = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type:UNFOLLOW, userId});
export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetch = (isFetch) => ({type:TOGGLE_IS_FETCH, isFetch});
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching,userId});


export const requestUsers = (page, pagesSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetch(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page,pagesSize).then(data => {

            dispatch(toggleIsFetch(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}


export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}


export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unFollowUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;