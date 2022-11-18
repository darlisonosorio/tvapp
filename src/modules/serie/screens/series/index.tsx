import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppBar, AppCard, AppLoading, AppScreen, AppRating } from '../../../../components';
import { setSerie } from '../../store/actions';
import { useSeries } from '../../hooks/useSeries';
import { Serie } from '../../@types';

const SeriesScreen = ({ navigation }) => {
  const dispatcher = useDispatch();
  const {
    loading,
    refreshing,
    series,
    refresh,
    getMoreSeries,
    setQuery,
  } = useSeries();

  const onSeriePress = (item: Serie) => {
    dispatcher(setSerie(item));
    navigation.navigate('SerieDetails');
  };

  return (
    <AppScreen
      navigation={navigation}
      customAppBar={(
        <AppBar
          title="Series"
          navigation={navigation}
          searchPlaceholder="type the serie name"
          enableBackAction={false}
          onSearchValueChange={(val) => {
            setQuery((val.trim().length >= 3) ? val.trim() : '');
          }}
        />
      )}
    >
      <FlatList
        data={series}
        renderItem={(({ item })=>(
          <AppCard
            src={item.image?.medium}
            title={item.name}
            onPress={() => onSeriePress(item)}
          >
          <AppRating rating={item.rating.average / 2} />
          </AppCard>
        ))}
        refreshing={refreshing}
        onRefresh={refresh}
        onEndReached={getMoreSeries}
        onEndReachedThreshold={0.1}
        getItemLayout={(data, index) => (
          { length: 166, offset: 166 * index, index}
        )}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        windowSize={10}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
     
     <AppLoading visible={loading && !refreshing} /> 
    </AppScreen>
  );
};

export default SeriesScreen;