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
      font-family: 'poppings';
      font-size: .9rem;
      color: #777777;
    `
  ],
  [
    'body',`
      font-family: 'poppingsMedium';
      font-size: 1rem;
      color: #53565A;
    `
  ],
  [
    'subtitle',`
      font-family: 'poppingsSemibold';
      font-size: 1.2rem;
      color: #BBBBBB;
    `
  ],
  [
    'header', `
      font-family: 'poppingsBold',
      font-size: 2rem;
      color: #000000;
    `
  ]
]);

export const Text = styled(SharedText)<TextProps>`
  ${({ variant }) => variantStyles[variant]}
  ${({ color }) => color ? `color: ${color};` : ''}
`;
