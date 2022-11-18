import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../store";
import { AppRating, AppScreen } from "../../../../components";
import { setFavorite } from "../../store/actions";

import * as S from './styles';

const SerieDetailsScreen = ({ navigation }) => {
  const dispatcher = useDispatch();
  const { serie, favorites } = useTypedSelector(state => state.serie);
  const [ model ] = useState(serie!);
  const [ fav, setFav ] = useState(favorites.indexOf(model) !== -1);

  const onFavoritePress = () => {
    setFav(!fav);
    dispatcher(setFavorite(model));
  };

  return (
    <AppScreen
      navigation={navigation}
      enableSearchAction={false}
      enableBackAction
      title={model.name}
    >
      <S.FavoriteAction
        selected={fav}
        onPress={() => onFavoritePress()}
      />

      <S.Wrapper>          
        <S.Image source={{ uri: model.image?.medium }} />
        <S.Summary>{model.summary}</S.Summary>
      </S.Wrapper>
      
      <S.RatingWrapper>
        <S.Grade>
          {model.rating.average}
        </S.Grade>
        <AppRating rating={model.rating.average} />
      </S.RatingWrapper>

      <S.GenresWrapper>
        {model.genres.map(it => (
          <S.Badge>{it}</S.Badge>
        ))}
      </S.GenresWrapper>
    </AppScreen>
  );
};

export default SerieDetailsScreen;
