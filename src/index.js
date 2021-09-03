import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

// setInterval( () =>{ //reselectors test mdtp 1000ms and no render
//     store.dispatch({type:"FAKE"})
// },1000 )

 ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <Provider store={store}>
                     <App/>
                </Provider>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );


reportWebVitals();