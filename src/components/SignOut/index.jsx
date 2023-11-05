import { StyleSheet, View } from 'react-native';

import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import useAuthStorage from '../../hooks/useAuthStorage';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  useEffect(() => {
    const signOut = async () => {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
    };
    signOut();
  });

  return (
    <View style={styles.container}>
      <Text>You have successfully signed out.</Text>
    </View>
  );
};
