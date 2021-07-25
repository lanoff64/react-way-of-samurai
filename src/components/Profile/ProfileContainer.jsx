import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getUsersStatus, updateStatus} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"
//import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18286; //hardCode
        }
        this.props.getProfileThunk(userId);
        this.props.getUsersStatus(userId);
    }


    render() {

        return (
            <Profile {...this.props}/>

        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {getProfileThunk,getUsersStatus,updateStatus}),
    withRouter,
    //withAuthRedirectComponent
)(ProfileContainer);