import { theme } from '../../Theme';
import { Appbar } from 'react-native-paper';
import styled from 'styled-components/native';

const textColor = '#333333';

export const Header = styled(Appbar.Header)`
  background: white;
  height: 64px;
`;

export const AppbarContent = styled(Appbar.Content).attrs({
  color: theme.colors.primary,
})`
  margin-top: 0;
  align-items: center;
  justify-content: center;
`;

type ViewChangeableProps = {
  visible?: boolean;
}

export const BackAction = styled(Appbar.BackAction).attrs({
  color: textColor,
  icon: 'arrow-left',
})<ViewChangeableProps>`
  margin-top: 0;
  ${({ visible }) => visible ? '' : `
    opacity: 0;
  `}
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Actions = styled.View<ViewChangeableProps>`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${({ visible }) => visible ? '' : `
    opacity: 0;
  `}
`;

export const SearchAction = styled(Appbar.Action).attrs({
  color: '#333333',
  icon: 'magnify'
})``;

export const CloseAction = styled(Appbar.Action).attrs({
  color: '#333333',
  icon: 'close'
})``;
