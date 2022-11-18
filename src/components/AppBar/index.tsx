import React, { useCallback, useState } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppInput from '../AppInput';

import * as S from './style';

interface AppBarProps {
  title?: string;
  navigation: any;
  searchPlaceholder?: string;
  enableBackAction?: boolean;
  onPressBackAction?: () => boolean;
  enableMenuAction?: boolean;
  onSearchValueChange?: (value: string) => void;
}

const AppBar = ({
    onPressBackAction,
    title,
    navigation,
    searchPlaceholder,
    enableBackAction = true,
    enableMenuAction = true,
    onSearchValueChange,
  }: AppBarProps): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMode, setSearchMode] = useState(false);

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
      {searchMode ? (
        <>
          <S.Content>
            <AppInput
              placeholder={searchPlaceholder}
              value={searchValue}
              onChangeText={(text) => { setSearchValue(text); }}
              onSubmitEditing={() => {
                if (onSearchValueChange) {
                  onSearchValueChange(searchValue);
                }
              }}
            />
          </S.Content>
          <S.Actions visible={enableMenuAction}>
            <S.CloseAction onPress={() => {
              setSearchMode(false);
              setSearchValue('');
              if (onSearchValueChange) {
                onSearchValueChange('');
              }
            }} />
          </S.Actions>
        </>
      ): (
        <>
          <S.Content>
            <DefaultHomeAppBarContent />
          </S.Content>
          <S.Actions visible={enableMenuAction}>
            <S.SearchAction onPress={() => { setSearchMode(true); }} />
          </S.Actions>
        </>
      )}
    </S.Header>
  );
};

export default AppBar;
