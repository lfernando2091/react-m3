import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3FormControlLabel {
  MuiFormControlLabel: {
    defaultProps?: ComponentsProps['MuiFormControlLabel'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiFormControlLabel'];
    variants?: ComponentsVariants['MuiFormControlLabel'];
  }
}

export const getFormControlLabel = (theme: Theme): M3FormControlLabel => {
  const { palette } = theme;
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38)
          }
        }
      }
    }
  }
}
