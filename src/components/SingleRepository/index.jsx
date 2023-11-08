import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';

import { GET_REPOSITORY } from '../../graphql/queries';
import { RepositoryItem } from '../RepositoryList/RepositoryItem';
import { ReviewItem } from '../ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryInfo = ({ repository }) => {
  return (
    <>
      <RepositoryItem item={repository} isSingleView={true} />
      <View style={styles.separator} />
    </>
  );
};

export const SingleRepository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  if (!data?.repository) return null;

  return (
    <FlatList
      data={data.repository.reviews.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={data.repository} isSingleView={true} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};
