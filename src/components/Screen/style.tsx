import styled from 'styled-components/native';

const Page = styled.View`
  flex: 1;
`;

const Container = styled.SafeAreaView`
  background-color: ${props => props.color ?? 'white'};
  flex: 1;
`

export default {
  Page,
  Container,
};