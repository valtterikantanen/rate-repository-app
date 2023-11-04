import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginLeft: 10,
  },
});

const AppBarTab = ({ path, text }) => (
  <Link to={path}>
    <Text style={styles.tab}>{text}</Text>
  </Link>
);

export default AppBarTab;
