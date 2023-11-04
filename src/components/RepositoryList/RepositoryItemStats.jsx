import { StyleSheet, View } from 'react-native';

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

const formatNumber = num => {
  // eslint-disable-next-line no-undef
  return new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(num);
};

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
