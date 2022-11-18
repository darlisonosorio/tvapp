import { AppRating } from '../../../components';
import React from 'react';
import { Modal, Subheading, Text, Title } from 'react-native-paper';
import { Episode } from '../@types';

import * as S from './styles';
import { removeTags } from '../../../utils/SummaryHelper';

type EpisodeModalProps = {
  episode: Episode|null;
  onDismiss: () => void;
}

const EpisodeModal = ({ episode, onDismiss}: EpisodeModalProps): JSX.Element => (
  <Modal
    visible={episode !== null}
    onDismiss={onDismiss}
    contentContainerStyle={{
      backgroundColor: 'white',
      padding: 20,
      marginHorizontal: 20
    }}
  >
      {episode !== null ? (
        <>
          <Title style={{ textAlign: 'center' }}>{episode.name}</Title>
          <Subheading>Season: {episode.season} - Episode: {episode.number}:</Subheading>
          <S.Row>
            <S.Image source={{ uri: episode.image?.medium }} />
            <S.Summary>
              {removeTags(episode.summary ?? '')}
            </S.Summary>
          </S.Row>       
        <AppRating rating={episode.rating.average} />
          
        </>
      ) : null}
  </Modal>
);

export default EpisodeModal;