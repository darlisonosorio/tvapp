import React from 'react';
import { AppScreen, Typography } from '../../../../components';

const ActorsScreen = ({ navigation }) => {
  return (
    <AppScreen
      navigation={navigation}
      title="Actors"
      enableBackAction={false}
    >
      <Typography>ACTOR PAGE CONTENT...</Typography>
    </AppScreen>
  );
};

export default ActorsScreen;