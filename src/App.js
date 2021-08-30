import './App.css';
import React, {Suspense} from "react";
import {Route, withRouter} from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/appReducer";
import Preloader from "./components/commons/Preloader/Preloader";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
//import LoginContainer from "./components/commons/LoginContainer";
const LoginContainer = React.lazy( () => import("./components/commons/LoginContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy( () => import("./components/Users/UsersContainer"));


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
                    <Suspense fallback={<Preloader/>}>
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
                    </Suspense>
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
