import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, AppCard, AppLoading, AppScreen, AppRating, AppEmptyMessage } from '../../../../components';
import { setSerie } from '../../../serie/store/actions';
import { Serie } from '../../../serie/@types';
import SeriesList from '../../../../modules/serie/components/SeriesList';
import { useTypedSelector } from '../../../../store';

const FavoritesScreen = ({ navigation }) => {
  const dispatcher = useDispatch();
  const { favorites } = useTypedSelector(state => state.serie);

  const onSeriePress = (item: Serie) => {
    dispatcher(setSerie(item));
    navigation.navigate('FavoriteDetails');
  };

  return (
    <AppScreen
      navigation={navigation}
      title="Favorites"
      enableBackAction={false}
      enableSearchAction={false}
    >
      <SeriesList
        data={favorites}
        refreshing={false}
        onItemPress={onSeriePress}
        getMore={() => {}}
        refresh={() => {}}
      />
    </AppScreen>
  );
};

export default FavoritesScreen;