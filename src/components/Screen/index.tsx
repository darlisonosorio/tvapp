import React from 'react';
import { useTheme } from 'react-native-paper';
import AppBar from '../AppBar';

import S from './style';

type ScreenProps = {
  style?: any;
  navigation: any;
  customAppBar?: React.ReactNode;
  onBackAction?: () => boolean;
  enableBackAction?: boolean;
  enableMenuAction?: boolean;
  children?: React.ReactNode;
  title?: string;
}

const AppScreen: React.FC<ScreenProps> = ({
  style,
  children,
  navigation,
  customAppBar,
  onBackAction,
  enableBackAction,
  enableMenuAction,
  title,
}) => {
  const { colors } = useTheme();

  const appBar = customAppBar ?? (
    <AppBar
      title={title}
      navigation={navigation}
      onPressBackAction={onBackAction}
      enableBackAction={enableBackAction}
      enableMenuAction={enableMenuAction}
    />
  );

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