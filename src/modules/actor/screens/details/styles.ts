import { Dimensions } from 'react-native';
import { theme } from '../../../../Theme';
import styled from 'styled-components/native';
import { Subheading } from 'react-native-paper';

const { width } = Dimensions.get('screen');

export const Image = styled.Image`
  width: 200px;
  height: 240px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  background-color: ${theme.colors.primary};
`;

export const Info = styled.View`
  flex-direction: column;
  padding: 8px;
  width: ${width - 232}px;
`;

export const InfoText = styled(Subheading)`
  color: white;
`;

export const SeriesWrapper = styled.View`
  padding: 8px 16px;
`
export const SerieItem = styled.Text`
  min-height: 42px;
  line-height: 42px;
  width: 100%;
  border-width: 1px;
  border-color: #999999;
  color: #000000;
  font-weight: 500;
  padding: 4px 12px;
  margin-bottom: 4px;
`;
