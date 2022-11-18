import React from 'react';

import { createStackNavigator  } from '@react-navigation/stack';

import FavoritesScreen from '../screens/list';
import DetailsScreen from '../../serie/screens/details';

const Stack = createStackNavigator();

const FavoritesNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Favorites"
    >
      <Stack.Screen  name="Favorites" component={FavoritesScreen} />
      <Stack.Screen  name="FavoriteDetails" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
