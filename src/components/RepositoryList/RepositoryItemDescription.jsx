import { Image, StyleSheet, View } from 'react-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  repositoryItemDescription: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  repositoryItemInfo: {
    display: 'flex',
    flexShrink: 1,
    marginLeft: 15,
  },
  fullName: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 8,
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 3,
  },
});

export const RepositoryItemDescription = ({ item }) => {
  return (
    <View style={styles.repositoryItemDescription}>
      <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.repositoryItemInfo}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.fullName}>
          {item.fullName}
        </Text>
        <Text color="textSecondary" style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
  );
};
