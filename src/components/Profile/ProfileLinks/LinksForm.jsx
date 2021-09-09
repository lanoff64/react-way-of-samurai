import React from "react";
import classes from "../Description/Disc.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";


const LinksFormFormik = ({initialValues, outEditMode, ...props}) => {


    return (
        <div className={classes.formiklinks}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {setStatus}) => {
                    props.saveContacts(values, setStatus);//thunk
                }}
            >
                {formik =>
                    (
                        <Form onSubmit={formik.handleSubmit}>
                            <div className={classes.nameFieldAbout}>
                            <div>
                                <label htmlFor='contacts.facebook'>facebook: </label>
                                <Field name='contacts.facebook' type="text" placeholder={'facebook'}/>
                                <ErrorMessage name='contacts.facebook'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.website'>website: </label>
                                <Field name='contacts.website' type="text" placeholder={'website'}/>
                                <ErrorMessage name='contacts.website'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.vk'>vk: </label>
                                <Field name='contacts.vk' type="text" placeholder={'vk'}/>
                                <ErrorMessage name='contacts.vk'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.twitter'>twitter: </label>
                                <Field name='contacts.twitter' type="text" placeholder={'twitter'}/>
                                <ErrorMessage name='contacts.twitter'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.instagram'>instagram: </label>
                                <Field name='contacts.instagram' type="text" placeholder={'instagram'}/>
                                <ErrorMessage name='contacts.instagram'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.youtube'>youtube: </label>
                                <Field name='contacts.youtube' type="text" placeholder={'youtube'}/>
                                <ErrorMessage name='contacts.youtube'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.github'>github: </label>
                                <Field name='contacts.github' type="text" placeholder={'github'}/>
                                <ErrorMessage name='contacts.github'/>
                            </div>

                            <div>
                                <label htmlFor='contacts.mainLink'>mainLink: </label>
                                <Field name='contacts.mainLink' type="text" placeholder={'mainLink'}/>
                                <ErrorMessage name='contacts.mainLink'/>
                            </div>
                            </div>

                            <div className={classes.contactsBtn}>
                                <button type="submit">Save</button>
                                <button onClick={outEditMode}>Cancel</button>
                            </div>

                            <span className={classes.errors}>{formik.status ? formik.status : null}</span>

                        </Form>

                    )}

            </Formik>

        </div>
    )

}


export const LinksFormFormikAbout = ({initialValues, outEditMode, ...props}) => {
    return (
        <div className={classes.formiklinksAbout}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values,{setStatus}) => {
                    props.saveContacts(values,setStatus);
                }}
            >
                {formik =>

                    (
                        <Form onSubmit={formik.handleSubmit}>

                                {/*<div>*/}
                                {/*    <label htmlFor="fullName">Ваше Имя: </label>*/}
                                {/*    <Field name="fullName" type="text" placeholder={'ваше Имя'}/>*/}
                                {/*    <ErrorMessage name="fullName"/>*/}
                                {/*</div>*/}

                            <div className={classes.nameFieldAbout}>
                                <div>
                                    <label htmlFor="aboutMe">О себе: </label>
                                    <Field name="aboutMe" type="text" placeholder={'расскажите о себе'}/>
                                    <ErrorMessage name="aboutMe"/>
                                </div>

                                <div>
                                    <label htmlFor="lookingForAJobDescription">Мои скиллы: </label>
                                    <Field name="lookingForAJobDescription" type="text" placeholder={'skills'}/>
                                    <ErrorMessage name='lookingForAJobDescription'/>
                                </div>

                                <div>
                                    <label htmlFor="lookingForAJob">Ищу работу: </label>
                                    <Field name='lookingForAJob' type='checkbox'/>
                                </div>
                            </div>


                                <button type="submit">Save</button>
                                <button onClick={outEditMode}>Cancel</button>
                                <span className={classes.errors}>{formik.status ? formik.status : null}</span>

                        </Form>
                    )}

            </Formik>

        </div>
    )
}


const LinksForm = ({outEditMode, saveContacts, initialValues, profile}) => {
    return (
        <div>
            <LinksFormFormik initialValues={initialValues} saveContacts={saveContacts} outEditMode={outEditMode}/>
        </div>
    );

}

export default LinksForm;