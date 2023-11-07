import { useQuery } from '@apollo/client';
import Constants from 'expo-constants';
import { ScrollView, StyleSheet, View } from 'react-native';

import { useMemo } from 'react';
import { GET_CURRENT_USER } from '../../graphql/queries';
import theme from '../../theme';
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

const AppBar = () => {
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  });

  const appBarTabs = useMemo(() => {
    const tabs = [{ path: '/', text: 'Repositories' }];
    if (data && data.me) {
      tabs.push({ path: 'new-review', text: 'Create a review' });
      tabs.push({ path: 'sign-out', text: 'Sign out' });
    } else {
      tabs.push({ path: 'sign-in', text: 'Sign in' });
      tabs.push({ path: 'sign-up', text: 'Sign up' });
    }
    return tabs;
  }, [data]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {appBarTabs.map(({ path, text }) => (
          <AppBarTab key={text} path={path} text={text} />
        ))}
      </ScrollView>
    </View>
  );
};

export default AppBar;
