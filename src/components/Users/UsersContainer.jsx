import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import * as axios from "axios";



class UsersConnectAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount - 13200)
        })
    }

   onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }


    render() {
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pagesSize={this.props.pagesSize}
                   currentPage={this.props.currentPage}
                   onPageClick={this.onPageClick}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>

        );
    }

}


let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount:(totalUsers)=>{
            dispatch(setTotalUsersCountAC(totalUsers));
        }
    }
}
const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersConnectAPI);
export default UsersContainer;