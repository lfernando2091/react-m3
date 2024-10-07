import {createContext, useContext} from "react";

export type AppState = {
    openDrawer: boolean;
    switchDrawer: () => void;
    themeColor: string;
    setThemeColor: (color: string) => void;
    lightMode: boolean;
    switchThemeMode: () => void;
}

export const AppContext = createContext<AppState>({
  openDrawer: false,
  switchDrawer: () => { /*empty*/ },
  setThemeColor: (_color: string) => { /*empty*/ },
  themeColor: '#6750a4',
  lightMode: true,
  switchThemeMode: () => { /*empty*/ }
})

export const useAppContext = () => useContext(AppContext);
