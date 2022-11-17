import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SeriesScreen from '../screens/series';

const Stack = createStackNavigator();

const SeriesNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Series"
    >
      <Stack.Screen  name="Series" component={SeriesScreen} />
    </Stack.Navigator>
  );
};

export default SeriesNavigation;
