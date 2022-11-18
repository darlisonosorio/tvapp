import React, { useCallback, useState, useMemo } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as S from './style';

interface AppBarProps {
  title?: string;
  navigation: any;
  searchPlaceholder?: string;
  enableBackAction?: boolean;
  onPressBackAction?: () => boolean;
  enableSearchAction?: boolean;
  onSearchValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({
    onPressBackAction,
    title,
    navigation,
    searchPlaceholder,
    enableBackAction = true,
    enableSearchAction = true,
    onSearchValueChange,
    children,
  }) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  const goBack = useCallback(() => {
    if (onPressBackAction) {
      onPressBackAction();
    } else {
      navigation.goBack();
    }
  }, [onPressBackAction]);

  const SearchContent = useMemo(() => (
    <>
      <S.Content>
        <S.Input
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
      <S.Actions>
        <S.CloseAction onPress={() => {
          setSearchMode(false);
          setSearchValue('');
          if (onSearchValueChange) {
            onSearchValueChange('');
          }
        }} />
      </S.Actions>
    </> 
  ), [ searchValue, onSearchValueChange ]);

  const TabContent = useMemo(() => (
    <>
      <S.Content>
        <>
          <S.BackAction
            visible={enableBackAction}
            disabled={!enableBackAction}
            onPress={goBack}
          />
          <S.AppbarContent title={title} />
        </>
      </S.Content>
      <S.Actions>
        <S.SearchAction
          visible={enableSearchAction}
          onPress={enableSearchAction ? () => { setSearchMode(true); } : null}
        />
        {children}
      </S.Actions>
    </>
  ), [ enableBackAction ]);

  return (
    <S.Header>
      <StatusBar animated={false} backgroundColor="black" />
      {searchMode ? SearchContent : TabContent}
    </S.Header>
  );
};

export default AppBar;
