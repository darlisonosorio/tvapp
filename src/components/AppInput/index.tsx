import React from 'react';
import { theme as MainTheme} from '../../Theme';
import { getThemeColor } from "../../utils/ThemeHelper";
import { TextInputProps } from "react-native";

import S from "./style";

interface AppInputProps extends TextInputProps {
  color?: string;
}

const AppInput: React.FC<AppInputProps> = ({
  color = 'primary',
  ...rest
}) => {
  const inputColor = getThemeColor(color);

  return (
    <S.Input {...rest}
      color={inputColor}
      outlineColor={inputColor}
      autoCapitalize="none"
      autoCorrect={false}
    />
  )
}

export default AppInput;
