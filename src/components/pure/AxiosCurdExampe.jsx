import React from 'react';
import { createUser, deleteUserById, getAllUsers, getPagedUsers, getUserById, login } from '../../services/axiosCRUDservice';
import { ErrorMessage, Field, Form, Formik } from 'formik';
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

const AxiosCurdExampe = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data))
                    sessionStorage.setItem('token', response.data.token)
                } else {
                    sessionStorage.removeItem('Token');
                    throw new Error('Login failure');
                }
            })
            .catch((error) => {
                alert(`Something wrong ${error}`);
                sessionStorage.removeItem('Token');
            })
            .finally(() => {
                console.log('Login done');
            })
    }

    const initialCredentials = {
        email: 'example@doamin.com',
        password: 'examplePassword'
    }

    //CRUD Example

    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getPagedUsers(page)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainUserById = (id) => {
        getUserById(id)
            .then((response) => {
                alert(JSON.stringify(response.data.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const createNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.status === 201) {
                    alert(JSON.stringify(response.data));
                } else {
                    throw new Error('User not created');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const updateUser = (id, name, job) => {
        getUserById(id , name , job)
            .then((response) => {
                alert(JSON.stringify(response.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
    }

    const deleteUser = (id) => {
        deleteUserById(id)
            .then((response) => {
                if(response.status === 204) {
                    alert(`User with id ${id} succesfully deleted`)
                } else {
                    throw new Error(`User not found`)
                }
                alert(JSON.stringify(response.data));
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
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
                    authUser(values);
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
            {/* Example buttons to test API response */}
            <div>
                <button onClick={obtainAllUsers}>
                    Get all users with Axios
                </button>
                <button onClick={() => obtainAllPagedUsers(1)}>
                    Get All Users (Page 1) with Axios
                </button>
                <button onClick={() => obtainUserById(1)}>
                    Get User 1
                </button>
                <button onClick={() => createNewUser('morpheus' , 'leader')}>
                    Create new user
                </button>
                <button onClick={() => updateUser( 1 ,'morpheus' , 'developer')}>
                    Update User
                </button>
                <button onClick={() => deleteUser(1)}>
                    Delete User
                </button>
            </div>
        </div>
    );
}

export default AxiosCurdExampe;
