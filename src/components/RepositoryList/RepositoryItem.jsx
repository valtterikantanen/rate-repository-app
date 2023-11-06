import * as Linking from 'expo-linking';
import { Pressable, StyleSheet, View } from 'react-native';
import { useNavigate } from 'react-router-native';

import theme from '../../theme';
import Text from '../Text';
import { RepositoryItemDescription } from './RepositoryItemDescription';
import { RepositoryItemStats } from './RepositoryItemStats';

const styles = StyleSheet.create({
  repositoryItem: {
    backgroundColor: 'white',
    padding: 15,
  },
  gitHubButton: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
  },
  gitHubButtonText: {
    color: 'white',
  },
});

export const RepositoryItem = ({ item, isSingleView }) => {
  const navigate = useNavigate();

  const onItemPress = () => {
    navigate(`/repositories/${item.id}`, { replace: true });
  };

  return (
    <Pressable onPress={onItemPress}>
      <View testID="repositoryItem" style={styles.repositoryItem}>
        <RepositoryItemDescription item={item} />
        <RepositoryItemStats item={item} />
        {isSingleView && (
          <Pressable style={styles.gitHubButton} onPress={() => Linking.openURL(item.url)}>
            <Text style={styles.gitHubButtonText} fontWeight="bold">
              Open in GitHub
            </Text>
          </Pressable>
        )}
      </View>
    </Pressable>
  );
};
