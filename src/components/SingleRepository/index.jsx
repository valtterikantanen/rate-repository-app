import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, View } from 'react-native';
import { useParams } from 'react-router-native';

import { GET_REPOSITORY } from '../../graphql/queries';
import theme from '../../theme';
import { formatDate } from '../../utils/format';
import { RepositoryItem } from '../RepositoryList/RepositoryItem';
import Text from '../Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  review: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
  },
  rating: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 15,
  },
  reviewBody: {
    display: 'flex',
    flexShrink: 1,
  },
  createdAtDate: {
    marginBottom: 5,
  },
  username: {
    marginBottom: 2,
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

const ReviewItem = ({ review }) => {
  const { rating, text, user, createdAt } = review.node;
  return (
    <View style={styles.review}>
      <Text fontWeight="bold" color="primary" fontSize="subheading" style={styles.rating}>
        {rating}
      </Text>
      <View style={styles.reviewBody}>
        <Text style={styles.username} fontWeight="bold" fontSize="subheading">
          {user.username}
        </Text>
        <Text style={styles.createdAtDate} color="textSecondary">
          {formatDate(createdAt)}
        </Text>
        <Text>{text}</Text>
      </View>
    </View>
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
