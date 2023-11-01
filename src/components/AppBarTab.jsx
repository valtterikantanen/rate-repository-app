import { Pressable, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginLeft: 10,
  },
});

const AppBarTab = ({ tab }) => (
  <Pressable>
    <Text style={styles.tab}>{tab}</Text>
  </Pressable>
);

export default AppBarTab;
