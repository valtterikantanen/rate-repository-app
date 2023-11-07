import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { useRepositories } from '../../hooks/useRepositories';
import { RepositoryItem } from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryOrderPicker = ({ selectedOrder, setSelectedOrder }) => (
  <Picker selectedValue={selectedOrder} onValueChange={value => setSelectedOrder(value)}>
    <Picker.Item label="Latest repositories" value="latest" />
    <Picker.Item label="Highest rated repositories" value="highest-rated" />
    <Picker.Item label="Lowest rated repositories" value="lowest-rated" />
  </Picker>
);

export const RepositoryListContainer = ({ repositories, selectedOrder, setSelectedOrder }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ListHeaderComponent={() => (
        <RepositoryOrderPicker selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
      )}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('latest');
  const searchParams = {
    latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
    'highest-rated': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    'lowest-rated': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  };
  const { repositories } = useRepositories(searchParams[selectedOrder]);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
