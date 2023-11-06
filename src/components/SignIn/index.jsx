import { Formik } from 'formik';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';

import { useSignIn } from '../../hooks/useSignIn';
import { Form } from '../Form';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const formFields = {
  inputs: [
    { name: 'username', placeholder: 'Username' },
    { name: 'password', placeholder: 'Password', secureTextEntry: true },
  ],
  submitButton: { text: 'Sign in' },
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} formFields={formFields} />}
    </Formik>
  );
};

export const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      navigate('/', { replace: true });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};
