import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } });
    return result;
  };

  return [signIn, result];
};
