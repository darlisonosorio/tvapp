import styled from 'styled-components/native';
import { Card as SharedCard, Title as SharedTitle} from 'react-native-paper';

export const Card = styled(SharedCard).attrs({
  mode: 'outlined',
  elevation: 4,
})`
  padding: 12px;
  height: 150px;
  margin: 8px 16px;
`;

export const Image = styled(SharedCard.Cover)`
  width: 30%;
  height: 122px;
`;

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Content = styled(SharedCard.Content)`
  width: 70%;
`;
