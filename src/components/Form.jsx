import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import { FormikTextInput } from './FormikTextInput';
import Text from './Text';

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

export const Form = ({ onSubmit, formFields }) => {
  return (
    <View style={styles.form}>
      {formFields.inputs.map(({ name, placeholder, ...rest }) => (
        <FormikTextInput key={name} name={name} placeholder={placeholder} {...rest} />
      ))}
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight="bold" style={styles.submitButtonText}>
          {formFields.submitButton.text}
        </Text>
      </Pressable>
    </View>
  );
};
