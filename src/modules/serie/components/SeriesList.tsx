import React from 'react';
import { FlatList } from 'react-native';
import { AppCard, AppEmptyMessage, AppRating } from '../../../components';
import { Serie } from '../@types';

type SeriesListProps = {
  getMore: () => void;
  refresh: () => void;
  onItemPress: (item: Serie) => void;
  data: Serie[];
  refreshing: boolean;
  loading: boolean;
}

const SeriesList = ({
  data,
  refreshing,
  loading,
  getMore,
  refresh,
  onItemPress
}: SeriesListProps): JSX.Element => (
  <FlatList
    data={data}
    renderItem={(({ item })=>(
      <AppCard
        src={item.image?.medium}
        title={item.name}
        onPress={() => onItemPress(item)}
      >
        <AppRating rating={item.rating.average / 2} />
      </AppCard>
    ))}
    ListEmptyComponent={loading ? null : <AppEmptyMessage />}
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

export default SeriesList;
