import React from 'react';
import { getThemeColor } from "../../utils/ThemeHelper";
import { TextProps } from "react-native";

import * as S from './style';

interface TypographyProps extends TextProps {
  color?: string;
  variant?: S.TextVariant;
}

const Typography = ({
  color,
  variant = 'body',
  ...rest
}: TypographyProps): JSX.Element => (
  <S.Text
    color={getThemeColor(color)}
    variant={variant}
    {...rest}
  />
);

export default Typography;
