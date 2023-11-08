import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, View } from 'react-native';
import { GET_CURRENT_USER } from '../../graphql/queries';
import { ReviewItem } from '../ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const MyReviews = () => {
  const { data } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
  });
  const reviews = data?.me?.reviews?.edges ?? [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} onMyReviewsPage={true} />}
      keyExtractor={item => item.node.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};
