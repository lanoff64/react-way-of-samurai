import React from "react";
import classes from './ProfileStatus.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";


class ProfileStatus2 extends React.Component {


    render() {
        return (
            <div>

                <StatusFormik/>

            </div>
        );
    }


}




export const StatusFormik = (props) => {
    return (

        <div className={classes.formik}>
            <div onDoubleClick={this.activeEditMode}> </div>
            <Formik
                initialValues={{status: '',}}
                validationSchema={Yup.object({
                    status: Yup.string()
                })}
                onSubmit = {(values, ) => {
                    console.log(values.status);
                }}

            >
                {
                    formik =>
                    (
                     <Form onSubmit={formik.handleSubmit}>

                        <Field className={classes.statusField} name="status" type="text" placeholder={'status'}/>

                        <div className={classes.button}>
                            <button type="submit">Сохранить</button>
                        </div>

                    </Form>

                    )

                }

            </Formik>
        </div>

    );
}

export default ProfileStatus2;

