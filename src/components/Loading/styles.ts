import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../Theme";

export const Wrapper = styled.View`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(ActivityIndicator).attrs({
  animated: true,
  color: theme.colors.primary,
  size: 'large'
})``;