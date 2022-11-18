import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

type InputProps = {
  color?: string;
}

const Input = styled(TextInput).attrs({ mode: 'outlined' })<InputProps>`
  fontFamily: 'poppings';
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.color ?? '#53565A'};
`;

export default {
  Input,
};
