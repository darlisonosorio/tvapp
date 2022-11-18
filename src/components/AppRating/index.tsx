import React from 'react';
import { AirbnbRating } from 'react-native-ratings';

import * as S from './styles';

type RatingProps = {
  rating: number;
}

const AppRating = ({ rating }: RatingProps): JSX.Element => (
  <S.RatingView>
    <AirbnbRating
      isDisabled={true}
      showRating={false}
      defaultRating={rating / 2}
      size={16}
    />
  </S.RatingView>
);

export default AppRating;