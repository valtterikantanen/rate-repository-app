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

const AppBarTabs = ['Repositories'];

const AppBar = () => {
  return (
    <View style={styles.container}>
      {AppBarTabs.map(tab => (
        <AppBarTab key={tab} tab={tab} />
      ))}
    </View>
  );
};

export default AppBar;
