import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,

} from "../../redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";
import {compose} from "redux";
import {
    setCurrentPageSelector, setFollowingInProgressSelector, setIsFetchSelector,
    setPagesSizeSelector,
    setTotalUsersCountSelector,
    setUsersSelector,

} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pagesSize} = this.props;
        this.props.requestUsers(currentPage, pagesSize);
    }

    onPageClick = (pageNumber) => {
        const {pagesSize} = this.props;
        this.props.requestUsers(pageNumber, pagesSize);

    }


    render() {
        return (<>
                {this.props.isFetch ? <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       currentPage={this.props.currentPage}
                       onPageClick={this.onPageClick}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}/>
                    }
            </>

        );
    }

}

let mapStateToProps = (state) => {
    return {
        users: setUsersSelector(state),
        pagesSize: setPagesSizeSelector(state),
        totalUsersCount: setTotalUsersCountSelector(state),
        currentPage: setCurrentPageSelector(state),
        isFetch: setIsFetchSelector(state),
        followingInProgress: setFollowingInProgressSelector(state)
    }
}


export default compose(connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers
    }
    ),
)(UsersContainer);
