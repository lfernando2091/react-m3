import { BrowserRouter } from 'react-router-dom';
import { Router } from './app-router';
import { ReactNode, useState } from 'react';
import { AppContext, AppState } from './@core/AppContext';

export type AppStateProviderProps = {
  children: ReactNode;
}

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [themeColor, setThemeColor] = useState("#086591");
  const [lightMode, setLightMode] = useState(true);

  const switchDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const setThemeColorValue = (color: string) => {
    setThemeColor(color);
  }

  const switchThemeMode = () => {
    setLightMode(!lightMode);
  }

  const state: AppState = {
    openDrawer,
    switchDrawer,
    themeColor,
    setThemeColor: setThemeColorValue,
    lightMode,
    switchThemeMode
  }

  return (
    <AppContext.Provider value={state}>
      { children }
    </AppContext.Provider>
  );
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
