import {combineReducers, createStore} from "redux";
import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profilePage:profilePageReducer,
    dialogsPage:dialogsPageReducer,
    navBar:navBarReducer,
    usersPage:usersReducer
});

let store = createStore(reducers);





export default store;