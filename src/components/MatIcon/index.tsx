import React from 'react';
import { ViewProps } from 'react-native';
import { getThemeColor } from '../../utils/ThemeHelper';

import S from './style';

interface MatIconProps extends ViewProps {
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
  ...rest
}) => {
  const iconColor = getThemeColor(color);
  return (
    <S.Icon
      name={name}
      size={size}
      color={iconColor}
      style={style}
      {...rest}
    />
  );
};

export default MatIcon;
