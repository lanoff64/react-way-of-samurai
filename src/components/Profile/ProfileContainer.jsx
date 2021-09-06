import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileThunk,
    getUsersStatus,
    saveContacts,
    savePhotoThunk,
    updateStatus,
} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"
// import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId; //hardCode was 2
            if(!userId) {
                this.props.history.push('/login');
                return;
            }
        }

        this.props.getProfileThunk(userId);
        this.props.getUsersStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }


    render() {

        return (

            <Profile {...this.props}
            isOwner={!this.props.match.params.userId }/>

        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    aboutMe:state.profilePage.aboutMe,
    authorizedUserId:state.auth.id,
    isAuth:state.auth.isAuth,
    isDownload:state.profilePage.isDownload
})

export default compose(
    connect(mapStateToProps, {getProfileThunk,getUsersStatus,updateStatus,savePhotoThunk,saveContacts}),
    withRouter,
    // withAuthRedirectComponent
)(ProfileContainer);