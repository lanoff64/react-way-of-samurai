import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsPageReducer,
    navBar:navBarReducer,
    usersPage:usersReducer,
    auth:authReducer
});

let store = createStore(reducers);




window.store = store;
export default store;