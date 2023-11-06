import { StyleSheet, View } from 'react-native';

import { RepositoryItemDescription } from './RepositoryItemDescription';
import { RepositoryItemStats } from './RepositoryItemStats';

const styles = StyleSheet.create({
  repositoryItem: {
    backgroundColor: 'white',
    padding: 15,
  },
});

export const RepositoryItem = ({ item }) => (
  <View testID="repositoryItem" style={styles.repositoryItem}>
    <RepositoryItemDescription item={item} />
    <RepositoryItemStats item={item} />
  </View>
);
