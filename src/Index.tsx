import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import { theme } from './Theme';
import Routes from './Routes';

const Index: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
    </View>
  );
};

export default Index;
