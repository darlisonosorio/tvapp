import React from 'react';
import { AppBar, AppLoading, AppScreen } from '../../../../components';
import { useSeries } from '../../hooks/useSeries';
import { Serie } from '../../@types';
import SeriesList from '../../components/SeriesList';

const SeriesScreen = ({ navigation }) => {
  const {
    loading,
    refreshing,
    series,
    refresh,
    getMoreSeries,
    setQuery,
  } = useSeries();

  const onSeriePress = (item: Serie) => {
    navigation.navigate('SerieDetails', { model: item });
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
            setQuery(val.trim());
          }}
        />
      )}
    >

      <SeriesList
        data={series}
        refreshing={refreshing}
        onItemPress={onSeriePress}
        getMore={getMoreSeries}
        refresh={refresh}
        loading={loading}
      />

     <AppLoading visible={loading && !refreshing} /> 
    </AppScreen>
  );
};

export default SeriesScreen;