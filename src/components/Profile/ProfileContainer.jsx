import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getProfileThunk(userId);
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
export  default connect(mapStateToProps,{setUsersProfile,getProfileThunk})(WithRouterProfileContainer);