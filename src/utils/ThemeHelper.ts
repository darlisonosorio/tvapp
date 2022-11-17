import { useTheme } from 'react-native-paper';

export const getThemeColor = (color: string | undefined) => {
  const { colors } = useTheme();
  return colors[color ?? ''] ?? color;
}