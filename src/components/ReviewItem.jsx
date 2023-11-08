import { useMutation } from '@apollo/client';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import { DELETE_REVIEW } from '../graphql/mutations';
import { GET_CURRENT_USER } from '../graphql/queries';
import theme from '../theme';
import { formatDate } from '../utils/format';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
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
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    flexGrow: 1,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  buttonDanger: {
    backgroundColor: theme.colors.error,
  },
  buttonText: {
    color: 'white',
  },
});

export const ReviewItem = ({ review, onMyReviewsPage = false }) => {
  const { id, rating, text, user, createdAt, repository } = review.node;
  const navigate = useNavigate();
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [GET_CURRENT_USER],
  });

  const onDeleteReview = () => {
    Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => mutate({ variables: { id } }) },
    ]);
  };

  return (
    <View style={styles.container}>
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
      {onMyReviewsPage && (
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => navigate(`/repositories/${repository.id}`)}
          >
            <Text fontWeight="bold" style={styles.buttonText}>
              View repository
            </Text>
          </Pressable>
          <Pressable style={[styles.button, styles.buttonDanger]} onPress={onDeleteReview}>
            <Text fontWeight="bold" style={styles.buttonText}>
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
