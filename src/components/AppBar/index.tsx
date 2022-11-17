import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './style';

interface AppBarProps {
  title?: string;
  enableBackAction?: boolean;
  onPressBackAction?: () => boolean;
  enableMenuAction?: boolean;
}

const AppBar = ({
    onPressBackAction,
    title,
    enableBackAction = true,
    enableMenuAction = true,
  }: AppBarProps): JSX.Element => {

  const navigation = useNavigation();

  const goBack = useCallback(() => {
    if (onPressBackAction) {
      onPressBackAction();
    } else {
      navigation.goBack();
    }
  }, [onPressBackAction]);

  const DefaultHomeAppBarContent = () => (
    <>
      <S.BackAction
        visible={enableBackAction}
        disabled={!enableBackAction}
        onPress={goBack}
      />
      <S.AppbarContent title={title} />
    </>
  );

  return (
    <S.Header>
      <StatusBar animated={false} backgroundColor="black" />
      <S.Content>
        <DefaultHomeAppBarContent />
      </S.Content>
      <S.Actions visible={enableMenuAction}>
        <S.SearchAction onPress={() => {}} />
      </S.Actions>
    </S.Header>
  );
};

export default AppBar;
