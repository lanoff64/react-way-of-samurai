import {authMeThunk} from "./authReducer";

const INITIALISED_SUCCESS = "INITIALISED_SUCCESS";


let initialState = {
    initialized:false
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {
                ...state,
                initialized:true
            }
        default:
            return state;
    }
}


export const initialisedSuccess = () => ({type: INITIALISED_SUCCESS});

export const initializeAppThunk = () => (dispatch) => {
        let promise = dispatch(authMeThunk());
        Promise.all([promise])
            .then(()=> {
           dispatch(initialisedSuccess());
        });

}

export default appReducer;