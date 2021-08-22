import React from 'react';
import classes from './Dialogs.module.css'
import Mesage from "./Mesage/Mesage";
import UserDialog from "./UserDialog/UserDialog";
import AnswerMessage from "./AnswerMessage/AnswerMessage";
import {ErrorMessage, Form, Formik, useField} from "formik";
import * as Yup from "yup";


const LoginFormik = (props) => {
    const MyTextArea = ({label, ...props}) => {
        const [field] = useField(props);
        return (
            <>
                <textarea {...field} {...props} />
            </>
        );
    };
    return (
        <div>
            <Formik
                initialValues={{messageText: ''}}
                validationSchema={Yup.object({
                    messageText: Yup.string()
                        .max(1000,'Максимально 1000'),

                })}
                onSubmit={values => {
                    props.sendMessage(values.messageText);
                }}
            >
                {formik =>
                    (<Form onSubmit={formik.handleSubmit}>

                        <MyTextArea  className={classes.textField}
                                     name="messageText"
                                     type="text-area"
                                     placeholder={`  Введите сообщение`}
                                     rows="5"
                                     cols="30"/>
                        <div className={classes.errors}><ErrorMessage name='messageText'/></div>

                        <div className={classes.button}>
                            <button type="submit">Отправить</button>
                        </div>

                    </Form>)}

            </Formik>
        </div>

    );
}

const Dialogs = (props) => {
    let mapDialog = props.dialogsPage.dialogsState.map(dialog =>
        <UserDialog name={dialog.name} key={dialog.id} id={dialog.id} avatar={dialog.avatar}/>);

    let mapMessages = props.dialogsPage.messageState.map(textMessage =>
        <Mesage message={textMessage.message} key={textMessage.id}/>);

    let mapAnswerMessage = props.dialogsPage.answerState.map(textMessageA =>
        <AnswerMessage message={textMessageA.message} key={textMessageA.id}/>);



    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.usersDialogs}>
                    {mapDialog}
                </div>
                <div className={classes.messages}>
                    {mapMessages}
                </div>
            </div>

            <div className={classes.answer}>
                {mapAnswerMessage}
                <LoginFormik sendMessage={props.sendMessage}/>
            </div>


        </div>
    );
}
export default Dialogs;
