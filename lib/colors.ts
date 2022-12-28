export enum Color {
  // Black
  Black = '#000000',
  BlackLight = '#181410',
  // White
  White = '#ffffff',
  WhiteDark = '#f2f1ef',
  // Brown
  Brown = '#9b7d65',
  BrownLight = '#e3b38b',
  BrownDark = '#5c443c',
  BrownVeryDark = '#241d18',
  // Purple
  Purple = '#475268',
  PurpleDark = '#242330',
  // Grey
  Grey = '#b4b4b4',
  GreyLight = '#dadada',
  GreyDark = '#acacac',
  // Blue
  Blue = '#3688f4',
  // Red
  Red = '#f44336',
  // Orange
  Orange = '#f9cb25',
  // Green
  Green = '#36f443',
}

export const Gradient = {
  Linear: `linear-gradient(120deg, ${Color.BlackLight} 0%, ${Color.BrownDark} 50%, ${Color.PurpleDark} 100%)`,
};
