import { Paragraph } from "react-native-paper";
import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get('screen');

export const Wrapper = styled(ScrollView)`
  max-height: 500px;
`;

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