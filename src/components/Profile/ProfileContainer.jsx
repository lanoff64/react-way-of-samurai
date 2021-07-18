import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        usersAPI.getProfile(userId)
            .then(response => {
            this.props.setUsersProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}/>

        );
    }
}
let mapStateToProps = (state) =>({
    profile:state.profilePage.profile
})


let WithRouterProfileContainer = withRouter(ProfileContainer);
export  default connect(mapStateToProps,{setUsersProfile})(WithRouterProfileContainer);