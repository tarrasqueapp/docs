import { createTheme, responsiveFontSizes } from '@mui/material';
import { Raleway, Recursive } from '@next/font/google';

import { Color } from './colors';

const raleway = Raleway({ subsets: ['latin'] });
const recursive = Recursive({ subsets: ['latin'] });

export let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: Color.BrownLight },
    secondary: { main: Color.Purple },
    error: { main: Color.Red },
    warning: { main: Color.Orange },
    info: { main: Color.Blue },
    success: { main: Color.Green },
    background: { default: Color.BlackLight, paper: Color.BrownVeryDark },
  },
  typography: {
    fontSize: 15,
    fontFamily: raleway.style.fontFamily,
    h1: { fontFamily: recursive.style.fontFamily, fontSize: 44, lineHeight: 1, fontWeight: 600 },
    h2: { fontFamily: recursive.style.fontFamily, fontSize: 34, lineHeight: 0.94, fontWeight: 400 },
    h3: { fontFamily: recursive.style.fontFamily, fontSize: 24, lineHeight: 1.1 },
    h4: { fontFamily: recursive.style.fontFamily, fontSize: 20, lineHeight: 1.16 },
    h5: { fontFamily: recursive.style.fontFamily, fontSize: 16, lineHeight: 1.28 },
    body1: { lineHeight: 1.5 },
    body2: { fontSize: 15, lineHeight: 1.28 },
    caption: { fontSize: 15, lineHeight: 1.28, color: Color.Grey },
    button: { fontWeight: 500, lineHeight: 1.125 },
  },
});

theme = responsiveFontSizes(theme);
