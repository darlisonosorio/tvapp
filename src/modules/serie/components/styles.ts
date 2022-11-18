import { Paragraph } from "react-native-paper";
import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const { width } = Dimensions.get('screen');

export const Row = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-top: 8px;
`;

export const Image = styled.Image`
  height: 150px;
  width: 120px;
  margin-top: 12px;
`;

export const Summary = styled(Paragraph)`
  width: ${width -200}px;
  padding: 4px 8px;
  
`;