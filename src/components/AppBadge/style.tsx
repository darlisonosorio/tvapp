import styled from 'styled-components/native';

const Text = styled.Text`
  color: #ffffff;
  font-size: 11px;
  line-height: 26px;
  background-color: ${props => props.color};
  padding: 4px 20px;
  border-radius: 5px;
  align-items: center;
`;

export default {
  Text
};
