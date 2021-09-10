import './App.css';
import React, {Suspense} from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderHtmlContainer from "./components/HeaderHtml/HeaderHtmlContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppThunk} from "./redux/appReducer";
import Preloader from "./components/commons/Preloader/Preloader";

const LoginContainer = React.lazy(() => import("./components/commons/LoginContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));


class App extends React.Component {
    catchAllUnhandleErrors = ()=> {
        alert('Some Error was occurred');
    }
    componentDidMount() {
        this.props.initializeAppThunk();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    }
    // componentWillMount() {
    //     window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
    // }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div>
                <HeaderHtmlContainer/>
                <div className='app-wrapper'>
                    <NavBarContainer/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Redirect exact from="/" to="/profile"/>
                                <Redirect exact from={`/profile/${this.props.authorizedUserId}`}  to='/profile'/>
                                <Route path='/dialogs'
                                       component={() => <DialogsContainer/>}/>
                                <Route path='/profile/:userId?'
                                       component={() => <ProfileContainer/>}/>
                                <Route path='/users'
                                       component={() => <UsersContainer/>}/>
                                <Route path='/music' component={Music}/>
                                <Route path='/news' component={News}/>
                                <Route path='/settings' component={Settings}/>
                                <Route path='/login' component={LoginContainer}/>
                                <Route path='*'
                                       render={() => <div className='error'>ERROR 404 PAGE NOT FOUND</div>}/>
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>


        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    authorizedUserId:state.auth.id,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunk}))(App);
