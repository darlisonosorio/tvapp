import styled from 'styled-components';

import
  MaterialIcon
from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = styled(MaterialIcon)`
  color: ${props => props.color};
  font-size: ${props => props.size ?? 24}px;
`;

export default {
  Icon
};