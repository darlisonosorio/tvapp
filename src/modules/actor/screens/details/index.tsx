import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Serie } from '../../../serie/@types';
import { setSerie } from '../../../serie/store/actions';
import { AppScreen } from '../../../../components';
import { useTypedSelector } from '../../../../store';
import { useCastCredits } from '../../hooks/useCastCredits';

import * as S from './styles';

const ActorDetailScreen = ({ navigation }) => {
  const dispatcher = useDispatch();
  const { person } = useTypedSelector(state => state.person);
  const [ model ] = useState(person!);
  const { credits } = useCastCredits(model.id);

  const openSerie = (item: Serie) => {
    dispatcher(setSerie(item));
    navigation.navigate('ActorSerieDetails');
  };

  return (
    <AppScreen
      title={model.name}
      navigation={navigation}
      enableBackAction={true}
      enableSearchAction={false}
    >
      <ScrollView>

        <S.Wrapper>          
          <S.Image source={{ uri: model.image?.medium }} />
          <S.Info>
            <S.InfoText>Gender: {model.gender}</S.InfoText>
            <S.InfoText>Country: {model.country?.name}</S.InfoText>
            <S.InfoText>Birthday: {model.birthday.replaceAll('-', '/')}</S.InfoText>
            {model.deathday ? (
              <S.InfoText>Deathday: {model.deathday.replaceAll('-', '/')}</S.InfoText>
            ): null}
          </S.Info>
        </S.Wrapper>
        
        <S.SeriesWrapper>
          <Title>Shows</Title>
          {credits.map(credit => (
            <TouchableOpacity
              key={credit.name}
              activeOpacity={0.5}
              onPress={() => { openSerie(credit); }}
            >
              <S.SerieItem>
                {credit.name} ({credit.premiered?.toString().substring(0, 4)})
              </S.SerieItem>
            </TouchableOpacity>
          ))}
        </S.SeriesWrapper>

      </ScrollView>
    </AppScreen>
  );
};

export default ActorDetailScreen;
