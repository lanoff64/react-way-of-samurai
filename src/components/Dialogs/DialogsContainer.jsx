import React from 'react';
import {sendMessage, updateMessageText,} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateMessageText: (text) => {
            dispatch(updateMessageText(text));
        },
        sendMessage: () => {
            dispatch(sendMessage());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;
