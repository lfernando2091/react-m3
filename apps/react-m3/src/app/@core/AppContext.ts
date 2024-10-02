import {createContext, useContext} from "react";

export type AppState = {
    openDrawer: boolean;
    switchDrawer: () => void;
}

export const AppContext = createContext<AppState>({
  openDrawer: false,
  switchDrawer: () => { }
})

export const useAppContext = () => useContext(AppContext)
