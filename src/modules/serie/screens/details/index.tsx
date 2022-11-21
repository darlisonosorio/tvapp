import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Title } from "react-native-paper";
import { useTypedSelector } from "../../../../store";
import { AppRating, AppScreen } from "../../../../components";
import { setFavorite } from "../../store/actions";

import * as S from './styles';
import { useEpisodes } from "../../hooks/useEpisodes";
import { TouchableOpacity } from "react-native";
import { Episode } from "../../@types";
import EpisodeModal from "../../components/EpisodeModal";
import { removeTags } from "../../../../utils/SummaryHelper";

const SerieDetailsScreen = ({ route, navigation }) => {
  const dispatcher = useDispatch();
  
  const { model } = route.params;
  
  const { favorites } = useTypedSelector(state => state.serie);
  const [ fav, setFav ] = useState(favorites.indexOf(model) !== -1);
  const { episodes } = useEpisodes(model.id);
  const [ episode, setEpisode ] = useState<Episode|null>(null);

  const onFavoritePress = () => {
    setFav(!fav);
    dispatcher(setFavorite(model));
  };

  const openEpisodeInfo = (ep: Episode) => {
    setEpisode(ep);
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
      <ScrollView>

        <S.Wrapper>          
          <S.Image source={{ uri: model.image?.medium }} />
          <S.Summary>
            {removeTags(model.summary ?? '')}
          </S.Summary>
        </S.Wrapper>
        
        <S.RatingWrapper>
          <S.Grade>
            - Rating: {model.rating.average ?? 0}
          </S.Grade>
          <AppRating rating={model.rating.average} />
        </S.RatingWrapper>

        <S.RatingWrapper>
          <S.Grade>- {model.premiered?.toString().replaceAll('-', '/')}</S.Grade>
          {model.ended ? (
            <>
              <S.Grade>to</S.Grade>
              <S.Grade>{model.ended.toString().replaceAll('-', '/')}</S.Grade>
            </>
          ): null}
        </S.RatingWrapper>

        { model.schedule && (model.schedule.time || model.schedule.days.length) ? (
          <S.RatingWrapper>
            <S.Grade>
              {'- '}
              {model.schedule.days.length ? model.schedule.days.join(', ') : ''}
              {model.schedule.time ? ` at ${model.schedule.time}` : ''}
            </S.Grade>
          </S.RatingWrapper>
        ) : null}

        <S.GenresWrapper>
          {model.genres.map(it => (
            <S.Badge key={it}>{it}</S.Badge>
          ))}
        </S.GenresWrapper>
        
        { Array.from( episodes ).map(s => (
          <S.SeasonWrapper key={s[0]}>
            <Title>Season {s[0]}</Title>
            {s[1].map(ep => (
              <TouchableOpacity
                key={ep.name}
                activeOpacity={0.5}
                onPress={() => { openEpisodeInfo(ep); }}
              >
                <S.Episode>{ep.number} - {ep.name}</S.Episode>
              </TouchableOpacity>
            ))}
          </S.SeasonWrapper>
        ))}
      </ScrollView>

    <EpisodeModal
      episode={episode}
      onDismiss={() => { setEpisode(null); }}
    />
    </AppScreen>
  );
};

export default SerieDetailsScreen;
