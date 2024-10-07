import { ThemeHandler } from '@react-m3/m3';
import { ReactNode } from 'react';
import { useAppContext } from '../@core/AppContext';

export type M3ThemeProps = {
  children: ReactNode;
}

export const M3Theme = ({ children }: M3ThemeProps) => {
  const { themeColor, lightMode } = useAppContext();
  return (<ThemeHandler color={themeColor} mode={lightMode ? "light": "dark"}>{ children }</ThemeHandler>);
}
