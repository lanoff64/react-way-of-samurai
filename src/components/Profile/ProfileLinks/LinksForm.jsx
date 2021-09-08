import React from "react";
import classes from "../Description/Disc.module.css";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";




const LinksFormFormik = ({initialValues, outEditMode, ...props}) => {

    // let badURLS = Object.keys(initialValues.contacts);
    const validationSchema = yup.object().shape({
        // badURLS: yup.string().required('поле обязательно').oneOf(badURLS)
    })
    return (
        <div className={classes.formiklinks}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setStatus}) => {
                    props.saveContacts(values, setStatus);//thunk
                }}
            >
                {formik =>
                    (
                        <Form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label htmlFor="contacts.facebook">facebook</label>
                                        <Field name="contacts.facebook" type="text" placeholder={'facebook'}/>
                                        <ErrorMessage name="contacts.facebook"/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.website">website</label>
                                        <Field name="contacts.website" type="text" placeholder={'website'}/>
                                        <ErrorMessage name="contacts.website"/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.vk">vk</label>
                                        <Field name="contacts.vk" type="text" placeholder={'vk'}/>
                                        <ErrorMessage name='contacts.vk'/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.twitter">twitter</label>
                                        <Field name="contacts.twitter" type="text" placeholder={'twitter'}/>
                                        <ErrorMessage name='contacts.twitter'/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.instagram">instagram</label>
                                        <Field name="contacts.instagram" type="text" placeholder={'instagram'}/>
                                        <ErrorMessage name='contacts.instagram'/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.youtube">youtube</label>
                                        <Field name="contacts.youtube" type="text" placeholder={'youtube'}/>
                                        <ErrorMessage name='contacts.youtube'/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.github">github</label>
                                        <Field name="contacts.github" type="text" placeholder={'github'}/>
                                        <ErrorMessage name='contacts.github'/>
                                    </div>

                                    <div>
                                        <label htmlFor="contacts.mainLink">mainLink</label>
                                        <Field name="contacts.mainLink" type="text" placeholder={'mainLink'}/>
                                        <ErrorMessage name='contacts.mainLink'/>
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


export const LinksFormFormikAbout = ({initialValues, outEditMode, ...props}) => {
    return (
        <div className={classes.formiklinks}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    props.saveContacts(values);
                    outEditMode();
                }}
            >
                {formik =>

                    (
                        <Form onSubmit={formik.handleSubmit}>
                            <div className={classes.nameField}>
                                <div>Ваше Имя</div>
                                <div>О себе:</div>
                                <div>Ваши скиллы:</div>
                                <div>Ищу работу:</div>

                            </div>

                            <div className={classes.fieldInpts}>
                                <div>
                                    <div><Field name="fullName" type="text" placeholder={'ваше Имя'}/></div>
                                    <div><Field name="aboutMe" type="text" placeholder={'расскажите о себе'}/></div>
                                    <div><Field name="lookingForAJobDescription" type="text" placeholder={'skills'}/>
                                    </div>
                                    <div><Field name="lookingForAJob" type="checkbox"/></div>
                                </div>
                                <div>
                                    <button type="submit">Save</button>
                                    <button onClick={outEditMode}>Cancel</button>
                                </div>

                            </div>


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