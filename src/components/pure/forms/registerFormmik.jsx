import React from 'react';
//import { User } from '../../../models/user.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';
//Import user
// https://formik.org/docs/examples/basic

const RegisterFormmik = () => {

    //const user = new User();

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        userRole: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string()
                .min(6, 'Name must be too short')
                .max(20, 'Name too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid format email')
                .required('Email is required'),
            userRole: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: USer / Admin')
                .required('Role is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password too short'),
            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: () => Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Password must match'
                    )
                }).required('You must confir the password')
        }
    )

    const sumbit = () => {
        alert('Register user');
    }

    return (
        <div>
            <h4>Register Formikk</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values,
                    teuched,
                    errors,
                    isSubmitting,
                    handleBlur,
                    touched }) => (
                    <Form>
                        <label htmlFor="userName">User Name</label>
                        <Field id="userName" type="text" name="userName" placeholder="Your user name" />

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="email@example.com" />

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="**password**"
                            type="password"
                        />

                        <label htmlFor="confirm">Repeat password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="**password**"
                            type="password"
                        />

                        {/* Username Errors */}
                        {
                            errors.userName && touched.userName &&
                            (
                                <ErrorMessage name="userName" component='div' />
                            )
                        }

                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div' />
                            )
                        }

                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }

                        {/* Repeat Password Errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div' />
                            )
                        }

                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Sending Your Credentials....</p>) : null}
                    </Form>
                )
                }
            </Formik>
        </div>
    );
}

export default RegisterFormmik;
