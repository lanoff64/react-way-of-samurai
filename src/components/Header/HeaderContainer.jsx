import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setAuthUser, setCurrentUserInfo} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })

            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUser(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + 2)
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