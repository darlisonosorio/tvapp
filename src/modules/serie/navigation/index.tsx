import React from 'react';

import { createStackNavigator  } from '@react-navigation/stack';

import SeriesScreen from '../screens/series';
import SerieDetailsScreen from '../screens/details';

const Stack = createStackNavigator();

const SeriesNavigation = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="Series"
    >
      <Stack.Screen  name="Series" component={SeriesScreen} />
      <Stack.Screen 
        name="SerieDetails"
        component={SerieDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SeriesNavigation;
