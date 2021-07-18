import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress, toggleIsFetch, unfollow
} from "../../redux/usersReducer";
import Preloader from "../commons/Preloader/Preloader";
import {usersAPI} from "../../api/api";



class UsersConnectAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetch(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize).then(data => {

            this.props.toggleIsFetch(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount - 10000)
        })
    }

    onPageClick = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetch(true);
        usersAPI.getUsers(pageNumber,this.props.pagesSize).then(data => {
            this.props.toggleIsFetch(false);
            this.props.setUsers(data.items)
        })

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
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        followingInProgress:state.usersPage.followingInProgress
    }
}


const UsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetch,
        toggleFollowingProgress
    }

)(UsersConnectAPI);

export default UsersContainer;