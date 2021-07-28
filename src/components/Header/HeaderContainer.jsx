import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeThunk, logoutThunk} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk();
    }

    render() {

        return (

            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        email: state.auth.email,
        profile: state.auth.profile

    }

}

export default connect(mapStateToProps, {authMeThunk,logoutThunk})(HeaderContainer);