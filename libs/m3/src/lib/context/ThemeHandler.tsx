import { FC, ReactNode, useMemo } from 'react';
import { ThemeStyle } from '../types/ThemeMode';
import { getPalette, getTheme } from '../utils/Utils';
import { CssBaseline, ThemeProvider } from '@mui/material';

export type ThemeProviderProps = {
  children: ReactNode;
  color: string;
  mode: ThemeStyle;
}

export const ThemeHandler: FC<ThemeProviderProps> = ({ children, color, mode }) => {
  const m3Theme = useMemo(() => {
    const palette = getPalette(color);
    return getTheme(mode, palette);
  }, [color, mode]);

  return (
    <ThemeProvider theme={m3Theme}>
      <CssBaseline enableColorScheme />
      { children }
    </ThemeProvider>
  );
}
