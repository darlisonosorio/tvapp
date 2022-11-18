import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

type LoadingProps = {
  visible: boolean;
}

const Loading = ({ visible }: LoadingProps): JSX.Element => {
  if (!visible) return <View />;
  return (
    <S.Wrapper >
      <S.Loading />
    </S.Wrapper>
  );
};

export default Loading;
