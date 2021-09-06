import React from "react";
import classes from "../Description/Disc.module.css";
import {Field, Form, Formik} from "formik";


const LinksFormFormik = ({outEditMode,...props}) => {
    return (
        <div>
            <Formik
                initialValues={{
                    aboutMe:"я крутой чувак 1001%",
                    contacts:{
                        facebook: 'facebook.com',
                        website: 'facebook.com',
                        vk: 'facebook.com',
                        twitter: 'facebook.com',
                        instagram: 'facebook.com',
                        youtube: 'facebook.com',
                        github: 'facebook.com',
                        mainLink: 'facebook.com',
                     },
                    lookingForAJob: true,
                    lookingForAJobDescription: 'ищу',
                    fullName: "Samurai R"

                }}
                onSubmit={(values) => {
                   props.saveContacts(values);
                    outEditMode();
                }}
            >
                {formik =>

                    (
                        <Form onSubmit={formik.handleSubmit}>
                            <div className={classes.links}>
                                <div><Field name="contacts.facebook" type="text" placeholder={'facebook'}/></div>
                                <div><Field name="contacts.website" type="text" placeholder={'website'}/></div>
                                <div><Field name="contacts.vk" type="text" placeholder={'vk'}/></div>
                                <div><Field name="contacts.twitter" type="text" placeholder={'twitter'}/></div>
                                <div><Field name="contacts.instagram" type="text" placeholder={'instagram'}/></div>
                                <div><Field name="contacts.youtube" type="text" placeholder={'youtube'}/></div>
                                <div><Field name="contacts.github" type="text" placeholder={'github'}/></div>
                                <div><Field name="contacts.mainLink" type="text" placeholder={'mainLink'}/></div>
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


const LinksForm = ({outEditMode,saveContacts}) => {
    return (
        <div>
            <LinksFormFormik saveContacts={saveContacts} outEditMode={outEditMode}/>
        </div>
    );

}

export default LinksForm;