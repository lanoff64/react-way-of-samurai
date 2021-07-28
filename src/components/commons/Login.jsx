import React from "react";
import {useFormik} from 'formik';


export const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={'login'} type={'string'}/>
            </div>
            <div>
                <input placeholder={'password'} type={'password'}/>
            </div>
            <div>
                <input type={'checkbox'}/> remember me
            </div>
            <div>
                <button type={'submit'}>Отправить</button>
            </div>
        </form>
    );
}


export const LoginFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder={'email'}
                    />
                </div>

                <div>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder={'password'}
                    />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>

        </div>
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
