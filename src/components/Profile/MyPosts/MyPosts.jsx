import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
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
                initialValues={{postText: ''}}
                validationSchema={Yup.object({
                    postText: Yup.string()
                        .min(2, 'Хотя-бы 2 символа')
                        .max(500,'Максимально 500'),

                })}
                onSubmit={values => {
                    props.addPost(values.postText)
                }}
            >
                {formik =>
                    (<Form onSubmit={formik.handleSubmit}>

                        <MyTextArea  className={classes.postTextField}
                                     name="postText"
                                     type="text-area"
                                     placeholder={` Что у Вас нового?`}
                                     rows="10"
                                     cols="60"/>
                        <div className={classes.errors}><ErrorMessage name='postText'/></div>

                        <div className={classes.button}>
                            <button type="submit">Запостить</button>
                        </div>

                    </Form>)}

            </Formik>
        </div>

    );
}

const MyPosts = (props) => {

    let mapPostsData =
        props.postsState.map(postMessage => <Post message={postMessage.message} key={postMessage.id}
                                                  likescount={postMessage.likescount}/>);


    return (
        <div className={classes.mypost}>
            <div>
                <div className={classes.labelMyPost}>
                    <div><h3>My posts</h3></div>
                    <div>
                        <LoginFormik addPost={props.addPost}/>
                    </div>

                </div>
                <div className={classes.divPost}>
                    {mapPostsData}
                </div>
            </div>
        </div>

    );
}
export default MyPosts;