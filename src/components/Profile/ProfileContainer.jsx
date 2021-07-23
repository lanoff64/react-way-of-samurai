import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2; //hardCode
        }
        this.props.getProfileThunk(userId);
    }


    render() {

        return (
            <Profile {...this.props}/>

        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let AuthRedirectComponent = withAuthRedirectComponent(ProfileContainer);


let WithRouterProfileContainer = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {setUsersProfile, getProfileThunk,})(WithRouterProfileContainer);