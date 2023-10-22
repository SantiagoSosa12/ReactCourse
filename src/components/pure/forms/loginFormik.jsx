import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid format email')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);

const LoginFormik = () => {

    const navigate = useNavigate();

    const initialCredentials = {
        email: 'example@doamin.com',
        password: 'examplePassword'
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                // ** Yup Validation Schemma
                validationSchema={loginSchema}
                // **onSumbit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                    //We save credentials in LocalStorage
                    localStorage.setItem('credentials', values)
                    navigate('/profile');
                }}
            >

                {({ values,
                    teuched,
                    errors,
                    isSubmitting,
                    handleBlur,
                    touched }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="email@example.com" />
                        {/* Email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'/>
                            )
                        }
                        {/* Password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }
                        <label htmlFor="email">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="jane@acme.com"
                            type="password"
                        />
                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Login Your Credentials....</p>) : null}
                    </Form>
                )
                }


            </Formik>
        </div>
    );
}

export default LoginFormik;
