import React from 'react';
import { getThemeColor } from "../../utils/ThemeHelper";

import S from './style';

interface AppBadgeProps {
  color?: string;
  children?: any;
  style?: any;
};

const AppBadge: React.FC<AppBadgeProps> = 
  ({ color = 'primary', children, style }) =>
    <S.Text style={style} color={getThemeColor(color)}>{children}</S.Text>;

export default AppBadge;
