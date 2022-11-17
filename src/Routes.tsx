import * as React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import SeriesNavigation from './modules/serie/navigation';
import ActorNavigation from './modules/actor/navigation';
import { navigationTheme } from './Theme';
import { AppIcon } from './components';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Series',
    component: SeriesNavigation,
    icon: 'home',
  },
  {
    name: 'Actors',
    component: ActorNavigation,
    icon: 'account'
  },
];

const Routes = () => (
  <NavigationContainer
    theme={navigationTheme}
    >
    <Tab.Navigator
      initialRouteName={tabs[0].name}
      screenOptions={{
        headerShown: false,
        tabBarStyle
      }}
    >
      {tabs.map(it => (
        <Tab.Screen
          key={it.name}
          name={it.name}
          component={it.component}
          options={{
            tabBarIcon: ({ color }) => (
              <AppIcon
                name={it.icon}
                color={color}
                size={28}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

const tabBarStyle = {
  height: 64,
  paddingBottom: 8,
};

export default Routes;