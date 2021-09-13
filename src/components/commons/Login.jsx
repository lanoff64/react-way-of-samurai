import React from "react";
import {ErrorMessage, Form, Formik, Field,} from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css'
import {Redirect} from "react-router-dom";

export const LoginFormik = (props) => {
    return (
        <div className={classes.formik}>
            <Formik
                initialValues={{email: '', password: '', checkbox: false, captcha: ''}}
                validationSchema={Yup.object({
                    password: Yup.string().required('Обязательное поле'),
                    email: Yup.string().email('Некорректный email').required('Обязательное поле'),
                })}
                onSubmit={(values, {setSubmitting, setFieldError, setStatus}) => {
                    props.loginThunk(values.email, values.password, values.checkbox, setSubmitting, setFieldError, setStatus, values.captcha);
                }}

            >
                {formik =>
                    (<Form onSubmit={formik.handleSubmit}>

                        <Field className={classes.emailField} name="email" type="email" placeholder={'email'}/>
                        <div className={classes.errors}><ErrorMessage name='email'/></div>


                        <Field className={classes.passwordField} name="password" type="password"
                               placeholder={'password'}/>
                        <div className={classes.errors}><ErrorMessage name='password'/></div>
                        <div className={classes.errors}>{formik.status}</div>


                        {
                            (formik.status) ?
                                (formik.status[0] === 'Incorrect anti-bot symbols') && (
                                    <div>
                                        <div><img src={formik.isSubmitting.toString()} alt=""/></div>
                                        <div><Field name="captcha" type="text" placeholder={'captcha'}/></div>
                                        <div className={classes.errors}><ErrorMessage name='captcha'/></div>
                                    </div>
                                ) : null

                        }


                        <label>
                            <Field className={classes.checkboxField} name="checkbox" type="checkbox"/>
                            <span className={classes.remember}>запомнить меня</span>
                        </label>


                        <div className={classes.button}>
                            <button type="submit">Вход</button>
                        </div>

                    </Form>)}

            </Formik>
        </div>

    );
}

const Login = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <div>
                <LoginFormik loginThunk={props.loginThunk}/>
            </div>
        </div>
    );
}


export default Login;
