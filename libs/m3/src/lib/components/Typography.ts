import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3Typography {
  MuiTypography: {
    defaultProps?: ComponentsProps['MuiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
  }
}

export const getTypography = (theme: Theme): M3Typography => {
  const { palette } = theme;
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.onSurface.main
        }
      }
    }
  };
}
