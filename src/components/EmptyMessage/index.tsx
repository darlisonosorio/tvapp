import React from 'react';
import { Title } from 'react-native-paper';
import AppIcon from '../MatIcon';

import * as S from './styles';

const EmptyMessage = () => (
  <S.EmptyView>
    <AppIcon color="#999999" name="warning" size={48} />
    <Title>No Content Found</Title>
  </S.EmptyView>
);

export default EmptyMessage;
