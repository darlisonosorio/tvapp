import React from 'react';
import { useTheme } from 'react-native-paper';
import AppBar from '../AppBar';

import S from './style';

type ScreenProps = {
  style?: any;
  enableAppBar?: boolean;
  onBackAction?: () => boolean;
  enableBackAction?: boolean;
  homeAppBar?: boolean;
  children?: React.ReactNode;
  title?: string;
}

const AppScreen: React.FC<ScreenProps> = ({
  style,
  children,
  enableAppBar = true,
  onBackAction,
  enableBackAction,
  title,
}) => {
  const { colors } = useTheme();

  const appBar = enableAppBar ? (
    <AppBar
      title={title}
      onPressBackAction={onBackAction}
      enableBackAction={enableBackAction}
    />
  ): null;

  return (
    <S.Page>
      {appBar}
      <S.Container
        color={colors.background}
        style={style}
      >
        {children}
      </S.Container>
    </S.Page>
  );
}

export default AppScreen;