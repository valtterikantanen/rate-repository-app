import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';

import { CREATE_USER } from '../../graphql/mutations';
import { useSignIn } from '../../hooks/useSignIn';
import { Form } from '../Form';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(5).max(30),
  password: yup.string().required('Password is required').min(5).max(30),
  passwordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const formFields = {
  inputs: [
    { name: 'username', placeholder: 'Username' },
    { name: 'password', placeholder: 'Password', secureTextEntry: true },
    { name: 'passwordConfirmation', placeholder: 'Password confirmation', secureTextEntry: true },
  ],
  submitButton: { text: 'Sign up' },
};

export const SignUp = () => {
  const [mutate] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    await mutate({ variables: { username, password } });
    await signIn({ username, password });
    navigate('/', { replace: true });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} formFields={formFields} />}
    </Formik>
  );
};
