import styled from 'styled-components/native';
import { Text as SharedText } from 'react-native-paper';

export type TextVariant = 'caption' | 'body' | 'subtitle' | 'header';

export type TextProps = {
  color?: string;
  variant: TextVariant;
}

const variantStyles: Map<TextVariant, string> = new Map([
  [
    'caption', `
      font-weight: 400;
      font-size: .9rem;
      color: #777777;
    `
  ],
  [
    'body',`
      font-weight: 400;
      font-size: 12px;
      color: #53565A;
    `
  ],
  [
    'subtitle',`
      font-weight: 500;
      font-size: 16px;
      color: #BBBBBB;
    `
  ],
  [
    'header', `
      font-weight: 600;
      font-size: 24px;
      color: #000000;
    `
  ]
]);

export const Text = styled(SharedText)<TextProps>`
  font-family: 'poppings';
  ${({ variant }) => variantStyles[variant]}
  ${({ color }) => color ? `color: ${color};` : ''}
`;
