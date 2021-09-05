import React from "react";
import classes from "../Description/Disc.module.css";
import {Field, Form, Formik} from "formik";


const LinksFormFormik = ({outEditMode}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    facebook: '',
                    website: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    youtube: '',
                    github: '',
                    mainLink: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                    outEditMode();
                    // props.loginThunk(values.email, values.password, values.checkbox, setSubmitting, setFieldError, setStatus, values.captcha);
                }}
            >
                {formik =>

                    (
                        <Form onSubmit={formik.handleSubmit}>
                            <div className={classes.links}>
                                <div><Field name="facebook" type="text" placeholder={'facebook'}/></div>
                                <div><Field name="website" type="text" placeholder={'website'}/></div>
                                <div><Field name="vk" type="text" placeholder={'vk'}/></div>
                                <div><Field name="twitter" type="text" placeholder={'twitter'}/></div>
                                <div><Field name="instagram" type="text" placeholder={'instagram'}/></div>
                                <div><Field name="youtube" type="text" placeholder={'youtube'}/></div>
                                <div><Field name="github" type="text" placeholder={'github'}/></div>
                                <div><Field name="mainLink" type="text" placeholder={'mainLink'}/></div>
                            </div>
                            <div>
                                <button type="submit">Save</button>
                            </div>

                        </Form>


                    )}

            </Formik>

        </div>
    )
}


const LinksForm = ({outEditMode}) => {
    return (
        <div>
            <LinksFormFormik outEditMode={outEditMode}/>
        </div>
    );

}

export default LinksForm;