import React from "react";
import classes from "../Description/Disc.module.css";
import {Field, Form, Formik} from "formik";


const LinksFormFormik = ({initialValues,outEditMode,...props}) => {
    return (
        <div   className={classes.formiklinks}>
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
                                <div>facebook</div>
                                <div>website</div>
                                <div>vk</div>
                                <div>twitter</div>
                                <div>instagram</div>
                                <div>youtube</div>
                                <div>github</div>
                                <div>mainLink</div>
                            </div>

                            <div className={classes.fieldInpts}>
                                <div>
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

                            </div>


                        </Form>


                    )}

            </Formik>

        </div>
    )
}


const LinksForm = ({outEditMode,saveContacts,initialValues,profile}) => {
    return (
        <div>
            <LinksFormFormik initialValues={initialValues} saveContacts={saveContacts} outEditMode={outEditMode}/>
        </div>
    );

}

export default LinksForm;