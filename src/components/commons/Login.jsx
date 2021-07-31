import React from "react";
import {ErrorMessage, Form, Formik, Field,} from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css'
import {Redirect} from "react-router-dom";


// export const LoginForm = () => {
//     return (
//         <form>
//             <div>
//                 <input placeholder={'login'} type={'string'}/>
//             </div>
//             <div>
//                 <input placeholder={'password'} type={'password'}/>
//             </div>
//             <div>
//                 <input type={'checkbox'}/> remember me
//             </div>
//             <div>
//                 <button type={'submit'}>Отправить</button>
//             </div>
//         </form>
//     );
// }


// export const LoginFormik = (props) => {
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//             checkbox: ''
//         },
//         onSubmit: values => {
//             console.log(values);
//         },
//     });
//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <div>
//
//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         onChange={formik.handleChange}
//                         value={formik.values.email}
//                         placeholder={'email'}
//                     />
//                 </div>
//
//                 <div>
//
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         onChange={formik.handleChange}
//                         value={formik.values.password}
//                         placeholder={'password'}
//                     />
//                 </div>
//                 <div>
//
//                     <input
//                         id="checkbox"
//                         name="checkbox"
//                         type="checkbox"
//                         onChange={formik.handleChange}
//                         value={formik.values.checkbox}
//                     /> запомнить меня
//                 </div>
//                 <div>
//                     <button type="submit">Submit</button>
//                 </div>
//
//             </form>
//
//         </div>
//     );
// }


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
                                        <div><img src={formik.isSubmitting} alt=""/></div>
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
