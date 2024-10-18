import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3FormControl {
  MuiFormControl: {
    defaultProps?: ComponentsProps['MuiFormControl'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiFormControl'];
    variants?: ComponentsVariants['MuiFormControl'];
  }
}

export const getFormControl = (theme: Theme): M3FormControl => {
  const { palette } = theme;
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& .MuiFormLabel-root': {
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38)
            }
          },
          '& .MuiFormHelperText-root': {
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38)
            }
          }
        }
      }
    }
  }
}
