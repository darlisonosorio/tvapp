import React from 'react';
import { AppScreen } from '../../../../components';
import { Serie } from '../../../serie/@types';
import SeriesList from '../../../../modules/serie/components/SeriesList';
import { useTypedSelector } from '../../../../store';

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useTypedSelector(state => state.serie);

  const onSeriePress = (item: Serie) => {
    navigation.navigate('FavoriteDetails', { model: item });
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