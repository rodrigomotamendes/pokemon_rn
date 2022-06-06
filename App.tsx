import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Details } from './src/screens/Details';
import theme from './src/styles/theme';

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <Details/>
    </ThemeProvider>
  );
}