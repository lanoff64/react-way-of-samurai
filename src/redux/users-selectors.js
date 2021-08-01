import {createSelector} from "reselect";

export const setUsers = (state) => {
    return state.usersPage.users;
}

export const setUsersSelector = createSelector(setUsers,
    (users) => {
    return users.filter(u => true);
})

export const setPagesSizeSelector = (state) => {
    return state.usersPage.pagesSize;
}

export const setTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount;
}

export const setCurrentPageSelector = (state) => {
    return state.usersPage.currentPage;
}

export const setIsFetchSelector = (state) => {
    return state.usersPage.isFetch;
}

export const setFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}