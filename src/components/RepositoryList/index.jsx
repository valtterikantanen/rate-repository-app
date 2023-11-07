import { Picker } from '@react-native-picker/picker';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

import { useRepositories } from '../../hooks/useRepositories';
import { RepositoryItem } from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchBar: {
    borderRadius: 5,
    backgroundColor: 'white',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
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

const RepositoryListHeader = ({
  searchBarInput,
  setSearchBarInput,
  selectedOrder,
  setSelectedOrder,
}) => (
  <View style={styles.header}>
    <Searchbar
      placeholder="Search repositories..."
      onChangeText={query => setSearchBarInput(query)}
      value={searchBarInput}
      style={styles.searchBar}
    />
    <RepositoryOrderPicker selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
  </View>
);

const RepositoryListContainer = ({
  repositories,
  searchBarInput,
  setSearchBarInput,
  selectedOrder,
  setSelectedOrder,
}) => {
  const renderHeader = useMemo(
    () => (
      <RepositoryListHeader
        searchBarInput={searchBarInput}
        setSearchBarInput={setSearchBarInput}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
      />
    ),
    [searchBarInput, setSearchBarInput, selectedOrder, setSelectedOrder]
  );

  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ListHeaderComponent={renderHeader}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('latest');
  const [searchBarInput, setSearchBarInput] = useState('');
  const [searchKeyword] = useDebounce(searchBarInput, 500);
  const searchParams = {
    latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
    'highest-rated': { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
    'lowest-rated': { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
  };
  const { repositories } = useRepositories({ ...searchParams[selectedOrder], searchKeyword });

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      searchBarInput={searchBarInput}
      setSearchBarInput={setSearchBarInput}
    />
  );
};

export default RepositoryList;
