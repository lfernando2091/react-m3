import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3Snackbar {
  MuiSnackbarContent: {
    defaultProps?: ComponentsProps['MuiSnackbarContent'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiSnackbarContent'];
    variants?: ComponentsVariants['MuiSnackbarContent'];
  };
}

export const getSnackbar = (theme: Theme): M3Snackbar => {
  const { palette, shape, elevation } = theme;
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: palette.inverseSurface.main,
          borderRadius: shape.corner.extraSmall.all,
          boxShadow: elevation.level3
        },
        message: {
          color: palette.inverseOnSurface.main,
        },
        action: {
          color: palette.inverseOnSurface.main,
        }
      }
    }
  }
}
