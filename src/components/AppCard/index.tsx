import React from 'react';
import { Card, Title } from 'react-native-paper';
import Typography from '../AppText';

import * as S from './styles';

type AppCard = {
  src: any;
  title: string;
  children?: React.ReactNode;
  onPress?: () => void;
}

const AppCard: React.FC<AppCard> = ({ src, title, onPress, children }) => (
  <S.Card onPress={onPress}>
    <S.Wrapper>
      <S.Image source={{ uri: src }} />
      <S.Content>
        <Title numberOfLines={2}>{title}</Title>
        {children}
      </S.Content>
    </S.Wrapper>
  </S.Card>
);

export default AppCard;
