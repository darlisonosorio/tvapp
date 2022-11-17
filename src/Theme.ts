import { DefaultTheme } from 'react-native-paper';
import {
  DefaultTheme as DefaultNavigationTheme,
} from '@react-navigation/native';


const colors = {
  primary: '#51968e',
  secondary: '#FFC107',
  tertiary: '#E29547',
  neutral: '#8B8B8B',
  background: '#EDEDED',
};

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

export const navigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    ...colors,
  },
};
