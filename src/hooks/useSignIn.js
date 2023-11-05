import { useApolloClient, useMutation } from '@apollo/client';

import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(result.data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};
