import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3Dialog {
  MuiDialog: {
    defaultProps?: ComponentsProps['MuiDialog'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDialog'];
    variants?: ComponentsVariants['MuiDialog'];
  },
}


export const getDialog = (theme: Theme): M3Dialog => {
  const { palette, elevation } = theme;
  return {
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            backgroundColor: alpha(palette.scrim.main, 0.32),
          }
        },
        paper: {
          borderRadius: '28px',
          backgroundColor: palette.surfaceContainerHigh.main,
          boxShadow: elevation.level0,
          '& .MuiDialogContent-root': {
            color: palette.onSurfaceVariant.main,
            '& .MuiDialogContentText-root': {
              color: palette.onSurfaceVariant.main
            }
          },
          '& .MuiDialogContent-dividers': {
            borderTopColor: palette.outlineVariant.main,
            borderBottomColor: palette.outlineVariant.main
          }
        }
      }
    }
  }
}
