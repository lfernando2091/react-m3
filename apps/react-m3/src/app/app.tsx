import { BrowserRouter } from 'react-router-dom';
import { Router } from './app-router';
import { ReactNode, useState } from 'react';
import { AppContext, AppState } from './@core/AppContext';

export type AppStateProviderProps = {
  children: ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const switchDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const state: AppState = {
    openDrawer,
    switchDrawer
  }

  return (
    <AppContext.Provider value={state}>
      { children }
    </AppContext.Provider>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
