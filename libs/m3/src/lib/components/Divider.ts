import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3Divider {
  MuiDivider: {
    defaultProps?: ComponentsProps['MuiDivider'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDivider'];
    variants?: ComponentsVariants['MuiDivider'];
  }
}

export const getDivider = (theme: Theme): M3Divider => {
  const { palette } = theme;
  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.outlineVariant.main
        },
        withChildren: {
          '&::after': {
            borderTopColor: palette.outlineVariant.main
          },
          '&::before': {
            borderTopColor: palette.outlineVariant.main
          }
        },
        wrapper: {
          color: palette.onSurfaceVariant.main
        }
      }
    }
  }
}
