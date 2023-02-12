import React from 'react';
import './login.scss';

import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useAuthCtx } from '../../../../context/Auth';

import logo from '../../../../assets/logo.svg';
import loginImage from '../../../../assets/signin.png';
import { Button, TextInput } from '../../../../components';
import { Link } from 'react-router-dom';

const Login = () => {
  const { login } = useAuthCtx();
  return (
    <section className='login cols-1 cols-2-md'>
      <div className='flex flex-1 justify-center items-center text-center login_img_container p-6'>
        <img src={logo} alt='lendsqr' className='logo' />
        <img src={loginImage} alt='pablo sign in' className='login_img' />
      </div>
      <div className='flex-1 flex flex-col login_form_container box p-6'>
        <h3 className='text-4xl leading-10 pb-4 text-dark-blue'>Welcome!</h3>
        <p className='text-gray'>Enter Details to Login</p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object({
            email: Yup.string()
              .required('Please enter your email')
              .email('Please enter a valid email'),
            password: Yup.string().required('Please enter your password'),
          })}
          onSubmit={(values) => login(values)}>
          <Form className='form'>
            <TextInput
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              autocomplete='email'
            />
            <TextInput
              id='password'
              name='password'
              type='password'
              placeholder='Password'
              autocomplete='current-password'
            />

            <Link to='/forgot-password' className='forgot_password mt-4'>
              Forgot Password?
            </Link>

            <Button
              label='Log in'
              type='submit'
              variant='filled'
              className='login__button'
            />
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default Login;
