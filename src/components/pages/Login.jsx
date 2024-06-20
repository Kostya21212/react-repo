import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    username: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    telephone:yup.string().min(10, 'Number too short').required('Required'),
    password: yup.string().min(6, 'Password too short').required('Required')
});

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="text-center bg-black text-warning p-4 rounded-2">
                <h3>Login Form</h3>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log('Form data submitted: ', values);
                    }}
                >
                    {({  touched, isValid}) => {
                        console.log('errors', isValid)
                       
                        return <Form className="d-flex flex-column gap-4">
                            <div className="mt-2 d-flex flex-row justify-content-between">
                               
                                <label>Username: </label>
                                <Field className='input input-solid-secondary' type='text' name='username' placeholder='Ваше імя' />
                                <ErrorMessage className="text-danger" name="username" component='div'/>
                            </div>
                            <div className="mt-2 d-flex flex-row justify-content-between">
                               
                                <label>Email: </label>
                                <Field className='input input-solid-secondary' type='email' name='email' placeholder='Имейл' />
                                <ErrorMessage className="text-danger" name="email" component='div'/>
                            </div>
                            <div className="mt-2 d-flex flex-row justify-content-between">
                               
                               <label>Telephone: </label>
                               <Field className='input input-solid-secondary' type='telephone' name='telephone' placeholder='Ваш телефон' />
                               <ErrorMessage className="text-danger" name="telephone" component='div'/>
                           </div>
                            <div className="mt-2 d-flex flex-row justify-content-between">
                               
                                <label>Password: </label>
                                <Field className='input input-solid-secondary' type='password' name='password' placeholder='Пароль' />
                                <ErrorMessage className="text-danger" name="password" component='div'/>
                            </div>
                            <button  type="submit" disabled={!isValid || !Object.keys(touched).length}>Відправити</button>
                        </Form>
                    }
                        
                    }
                </Formik>
            </div>
        </div>
    );
};

export default Login;
