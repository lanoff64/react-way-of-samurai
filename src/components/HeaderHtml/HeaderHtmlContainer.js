import React from "react";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/authReducer";
import HeaderHtml from "./HeaderHtml";


class HeaderHtmlContainer extends React.Component {
    render() {
        return (
            <HeaderHtml {...this.props}/>
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

export default connect(mapStateToProps, {logoutThunk})(HeaderHtmlContainer);