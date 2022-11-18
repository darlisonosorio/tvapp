import * as React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import SeriesNavigation from './modules/serie/navigation';
import ActorNavigation from './modules/actor/navigation';
import { navigationTheme } from './Theme';
import { AppIcon } from './components';
import FavoritesNavigation from './modules/favorite/navigation';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'Series',
    component: SeriesNavigation,
    icon: 'home',
  },
  {
    name: 'Favorites',
    component: FavoritesNavigation,
    icon: 'star',
  },
  {
    name: 'Actors',
    component: ActorNavigation,
    icon: 'account'
  },
];

const visibleTabs = tabs.map(it => it.name);


const Routes = () => (
  <NavigationContainer
    theme={navigationTheme}
    >
    <Tab.Navigator
      initialRouteName={tabs[0].name}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
          paddingBottom: 8,
        }
      }}
    >
      {tabs.map(it => (
        <Tab.Screen
          key={it.name}
          name={it.name}
          component={it.component}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => (
              <AppIcon
                name={it.icon}
                color={color}
                size={28}
              />
            ),
            // tabBarStyle: ((route) => 
            //   visibleTabs.includes(getFocusedRouteNameFromRoute(route) ?? '')
            //     ? {}
            //     : { display: 'none' }
            // )(route),
          })}
        />
      ))}
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
