import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile} from "../../redux/profilePageReducer";
import {Redirect,withRouter} from "react-router-dom"




class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
             userId = 2; //hardCode
        }
        this.props.getProfileThunk(userId);
    }


    render() {

        if(!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <Profile {...this.props}/>

        );
    }
}

let mapStateToProps = (state) =>({

    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth

})


let WithRouterProfileContainer = withRouter(ProfileContainer);
export  default connect(mapStateToProps,{setUsersProfile,getProfileThunk,})(WithRouterProfileContainer);