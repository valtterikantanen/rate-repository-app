import { StyleSheet, View } from 'react-native';

import { formatNumber } from '../../utils/format';
import Text from '../Text';

const styles = StyleSheet.create({
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  statsItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const StatsItem = ({ number, text }) => (
  <View style={styles.statsItem}>
    <Text fontWeight="bold">{formatNumber(number)}</Text>
    <Text color="textSecondary">{text}</Text>
  </View>
);

export const RepositoryItemStats = ({ item }) => {
  const stats = [
    { number: item.stargazersCount, text: 'Stars' },
    { number: item.forksCount, text: 'Forks' },
    { number: item.reviewCount, text: 'Reviews' },
    { number: item.ratingAverage, text: 'Rating' },
  ];

  return (
    <View style={styles.statsContainer}>
      {stats.map(stat => (
        <StatsItem key={stat.text} number={stat.number} text={stat.text} />
      ))}
    </View>
  );
};
