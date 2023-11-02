import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  error: {
    borderColor: theme.colors.error,
  },
});

export const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.textInput, error && styles.error];

  return <NativeTextInput style={textInputStyle} {...props} />;
};
