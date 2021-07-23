import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,

} from "../../redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pagesSize);
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pagesSize);

    }


    render() {
        return (<>
                {this.props.isFetch ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pagesSize={this.props.pagesSize}
                       currentPage={this.props.currentPage}
                       onPageClick={this.onPageClick}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}/>
            </>

        );
    }

}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetch: state.usersPage.isFetch,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
    }
    ),
    withAuthRedirectComponent
)(UsersContainer);
