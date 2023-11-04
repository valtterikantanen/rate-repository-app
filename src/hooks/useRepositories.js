import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

export const useRepositories = () => {
  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data?.repositories;

  return { repositories };
};
