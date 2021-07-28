import React from "react";
import {ErrorMessage, Form, Formik, Field} from 'formik';
import * as Yup from 'yup';
import classes from './Login.module.css'

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
        <Formik
            initialValues={{email: '', password: '', checkbox: false}}
            validationSchema={Yup.object({
                password: Yup.string()
                    .min(8, 'Пароль должен быть из 8 символов или больше')
                    .required('Обязательное поле'),
                email: Yup.string().email('Некорректный email').required('Обязательное поле'),
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {formik =>
                (<Form onSubmit={formik.handleSubmit}>

                    <Field className={classes.emailField} name="email" type="email" placeholder={'email'}/>
                    <div className={classes.errors}><ErrorMessage name='email'/></div>


                    <Field className={classes.passwordField} name="password" type="password" placeholder={'password'}/>
                    <div className={classes.errors}><ErrorMessage name='password'/></div>


                    <Field className={classes.checkboxField} name="checkbox" type="checkbox"/>
                    <span className={classes.remember}>запомнить меня</span>


                    <div className={classes.button}>
                        <button type="submit">Войти</button>
                    </div>

                </Form>)}

        </Formik>
    );
}

const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <div>
                <LoginFormik/>
            </div>
        </div>
    );
}

export default Login;
