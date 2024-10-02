import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App, { AppStateProvider } from './app/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { M3DarkThemeDefault, M3LightThemeDefault } from '@react-m3/m3';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AppStateProvider>
      <ThemeProvider theme={M3LightThemeDefault}>
        <CssBaseline enableColorScheme/>
        <App />
      </ThemeProvider>
    </AppStateProvider>
  </StrictMode>
);
