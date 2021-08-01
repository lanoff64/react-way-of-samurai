import './App.css';
import React from "react";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/commons/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/appReducer";
import Preloader from "./components/commons/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunk();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>

                <HeaderContainer/>
                <NavBarContainer/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={LoginContainer}/>

                </div>


            </div>

        );
    }
}
let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
connect(mapStateToProps, {initializeAppThunk})) (App);
