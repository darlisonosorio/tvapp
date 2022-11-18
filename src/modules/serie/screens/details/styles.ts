import styled from 'styled-components/native';
import { theme } from '../../../../Theme';
import { Appbar, Paragraph } from 'react-native-paper';
import { AppBadge, Typography } from '../../../../components';

export const Image = styled.Image`
  width: 170px;
  height: 240px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  background-color: ${theme.colors.primary};
`;

type FavoriteIconProps = {
  selected?: boolean;
};

export const FavoriteAction = styled<FavoriteIconProps>(Appbar.Action)
.attrs(({ selected }) => ({
  color: theme.colors.primary,
  icon: selected ? 'cards-heart' : 'cards-heart-outline',
}))`
  position: absolute;
  z-index: 3;
  right: 0;
  top: -55px;
`;

export const Summary = styled(Paragraph)`
  color: white;
  flex: 1;
  text-align: justify;
  padding-left: 8px;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 8px 16px;
`;

export const Grade = styled(Typography).attrs({
  variant: 'subtitle'
})`
  margin-right: 30px;
`;

export const GenresWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 8px 16px;
`;

export const Badge = styled(AppBadge)`
  margin: 0 4px;
`;

export const SeasonWrapper = styled.View`
  padding: 8px 16px;
`
export const Episode = styled.Text`
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