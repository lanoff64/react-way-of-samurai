import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
     onFollow, setCurrentPage,setTotalUsersCount,setUsers,toggleIsFetch, unfollow
    } from "../../redux/usersReducer";
import * as axios from "axios";
import Preloader from "../commons/Preloader/Preloader";


class UsersConnectAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            this.props.toggleIsFetch(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount - 10000)
        })
    }

    onPageClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.toggleIsFetch(false);
            this.props.setUsers(response.data.items)
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
                       onFollow={this.props.onFollow}
                       unfollow={this.props.unfollow}/>
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
        isFetch: state.usersPage.isFetch
    }
}


const UsersContainer = connect(mapStateToProps, {
        onFollow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetch
    }
)(UsersConnectAPI);
export default UsersContainer;