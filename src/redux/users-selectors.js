export const setUsersSelector = (state) => {
    return state.usersPage.users;
}

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