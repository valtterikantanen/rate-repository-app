import { StyleSheet, View } from 'react-native';

import theme from '../theme';
import { formatDate } from '../utils/format';
import Text from './Text';

const styles = StyleSheet.create({
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

export const ReviewItem = ({ review }) => {
  const { rating, text, user, createdAt, repository } = review.node;
  return (
    <View style={styles.review}>
      <Text fontWeight="bold" color="primary" fontSize="subheading" style={styles.rating}>
        {rating}
      </Text>
      <View style={styles.reviewBody}>
        <Text style={styles.username} fontWeight="bold" fontSize="subheading">
          {user?.username || repository.fullName}
        </Text>
        <Text style={styles.createdAtDate} color="textSecondary">
          {formatDate(createdAt)}
        </Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
