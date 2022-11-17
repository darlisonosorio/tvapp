import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ActorScreen from '../screens/actors';

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
    </Navigator>
  );
};

export default ActorNavigation;
