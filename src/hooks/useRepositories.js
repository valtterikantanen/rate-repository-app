import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

export const useRepositories = ({ orderBy, orderDirection, searchKeyword }) => {
  const { data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  });

  const repositories = data?.repositories;

  return { repositories };
};
