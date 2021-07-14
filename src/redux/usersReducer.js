const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";

let initialState = {
    users: [ ],
    pagesSize: 100,
    totalUsersCount: 0,
    currentPage:1,
    isFetch: false,
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                   if (u.id === action.userId) {
                       return {...u, follow: true}
                   }
                   return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, follow: false}
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

        }
        default:
            return state;
    }
}


export const followAC  = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId});
export const setUsersAC = (users) => ({type:SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetchAC = (isFetch) => ({type:TOGGLE_IS_FETCH, isFetch});


export default usersReducer;