import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, AppLoading, AppScreen } from '../../../../components';
import { setSerie } from '../../store/actions';
import { useSeries } from '../../hooks/useSeries';
import { Serie } from '../../@types';
import SeriesList from '../../components/SeriesList';

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
      />

     <AppLoading visible={loading && !refreshing} /> 
    </AppScreen>
  );
};

export default SeriesScreen;