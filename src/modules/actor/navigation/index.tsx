import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ActorScreen from '../screens/actors';
import ActorDetailScreen from '../screens/details';
import SerieDetailsScreen from '../../serie/screens/details';

const {Navigator, Screen} = createStackNavigator();

const ActorNavigation = () => {
  return (
    <Navigator
      headerMode="none"
      initialRouteName="Actors"
    >
      <Screen
        name="Actors"
        component={ActorScreen}
      />
      <Screen
        name="ActorDetails"
        component={ActorDetailScreen}
      />
      <Screen
        name="ActorSerieDetails"
        component={SerieDetailsScreen}
      />
    </Navigator>
  );
};

export default ActorNavigation;
