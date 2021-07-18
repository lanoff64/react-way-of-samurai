import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser, setCurrentUserInfo} from "../../redux/authReducer";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMe()
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUser(id, email, login);
                    usersAPI.getProfile(2)//hardCode userId, cause no-info of my profile
                        .then(response => {
                            this.props.setCurrentUserInfo(response.data)
                        })
                }

            })
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

export default connect(mapStateToProps, {setAuthUser, setCurrentUserInfo})(HeaderContainer);