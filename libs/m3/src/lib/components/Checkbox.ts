import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';
import { StateLayer } from '../utils/StateLayerColor';

interface M3Checkbox {
  MuiCheckbox: {
    defaultProps?: ComponentsProps['MuiCheckbox'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCheckbox'];
    variants?: ComponentsVariants['MuiCheckbox'];
  };
}

export const getCheckbox = (theme: Theme): M3Checkbox => {
  const { palette } = theme;
  return {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            color: palette.onSurfaceVariant.main,
            '&:hover': {
              color: palette.onSurface.main,
              backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover),
            },
            '&.Mui-focusVisible': {
              backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus),
            },
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&.Mui-checked': {
              '&.MuiCheckbox-colorPrimary': {
                color: palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(palette.primary.main, StateLayer.Hover),
                },
                '&.Mui-focusVisible': {
                  backgroundColor: alpha(palette.primary.main, StateLayer.Focus),
                },
              },
              '&.MuiCheckbox-colorError': {
                color: palette.error.main,
                '&:hover': {
                  backgroundColor: alpha(palette.error.main, StateLayer.Hover),
                },
                '&.Mui-focusVisible': {
                  backgroundColor: alpha(palette.error.main, StateLayer.Focus),
                },
              },
              '&.Mui-disabled': {
                color: alpha(palette.onSurface.main, 0.38),
              },
            }
          }
        }
      }
    }
  }
}
