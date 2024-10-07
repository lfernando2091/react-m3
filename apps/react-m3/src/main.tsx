import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App, { AppStateProvider } from './app/app';
import { M3Theme } from './app/@theme/M3Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <AppStateProvider>
      <M3Theme>
        <App />
      </M3Theme>
    </AppStateProvider>
  </StrictMode>
);
