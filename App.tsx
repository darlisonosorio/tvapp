import React from 'react';
import { LogBox } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import store from './src/store';
import Index from './src/Index';

LogBox.ignoreAllLogs(true);

const App = () => (
  <ReduxProvider store={store}>
    <Index />
  </ReduxProvider>
);

export default App;