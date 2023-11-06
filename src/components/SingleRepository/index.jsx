import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../../graphql/queries';
import { RepositoryItem } from '../RepositoryList/RepositoryItem';

export const SingleRepository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  if (!data?.repository) return null;
  return <RepositoryItem item={data.repository} isSingleView={true} />;
};
