import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
});

const AppBarTabs = [
  { path: '/', text: 'Repositories' },
  { path: 'sign-in', text: 'Sign in' },
];

const AppBar = () => {
  return (
    <View style={styles.container}>
      {AppBarTabs.map(({ path, text }) => (
        <AppBarTab key={text} path={path} text={text} />
      ))}
    </View>
  );
};

export default AppBar;
