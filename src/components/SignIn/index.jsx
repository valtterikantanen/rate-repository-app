import { Formik } from 'formik';
import { Pressable, StyleSheet, View } from 'react-native';
import * as yup from 'yup';

import { useSignIn } from '../../hooks/useSignIn';
import theme from '../../theme';
import { FormikTextInput } from '../FormikTextInput';
import Text from '../Text';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 15,
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight="bold" style={styles.submitButtonText}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};
