import React from 'react';
import { getThemeColor } from '../../utils/ThemeHelper';

import S from './style';

interface MatIconProps {
  name: string;
  color?: string;
  size?: number;
  style?: any;
}

const MatIcon: React.FC<MatIconProps> = ({
  name,
  color = 'primary',
  size,
  style,
}) => {
  const iconColor = getThemeColor(color);
  return (
    <S.Icon name={name} size={size} color={iconColor} style={style} />
  );
};

export default MatIcon;
