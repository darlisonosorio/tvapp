import React from 'react';
import { FlatList } from 'react-native';
import { AppCard, AppEmptyMessage, AppRating } from '../../../components';
import { Person } from '../@types';

type PeopleListProps = {
  getMore: () => void;
  refresh: () => void;
  onItemPress: (item: Person) => void;
  data: Person[];
  refreshing: boolean;
}

const PeopleList = ({
  data,
  refreshing,
  getMore,
  refresh,
  onItemPress
}: PeopleListProps): JSX.Element => (
  <FlatList
    data={data}
    renderItem={(({ item })=>(
      <AppCard
        src={item.image?.medium}
        title={item.name}
        onPress={() => onItemPress(item)}
      />
    ))}
    ListEmptyComponent={<AppEmptyMessage />}
    refreshing={refreshing}
    onRefresh={refresh}
    onEndReached={getMore}
    onEndReachedThreshold={0.1}
    getItemLayout={(data, index) => (
      { length: 166, offset: 166 * index, index}
    )}
    initialNumToRender={5}
    maxToRenderPerBatch={10}
    windowSize={10}
    contentContainerStyle={{ paddingVertical: 8 }}
  />
);

export default PeopleList;
