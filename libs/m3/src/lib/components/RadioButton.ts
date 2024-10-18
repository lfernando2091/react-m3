import {
  alpha,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material';
import { StateLayer } from '../utils/StateLayerColor';

interface M3Radio {
  MuiRadio: {
    defaultProps?: ComponentsProps['MuiRadio'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiRadio'];
    variants?: ComponentsVariants['MuiRadio'];
  };
}

export const getRadio = (theme: Theme): M3Radio => {
  const { palette } = theme;
  return {
    MuiRadio: {
      styleOverrides: {
        colorPrimary: {
          color: palette.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover)
          },
          '&.Mui-focusVisible': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover)
          },
          '&.Mui-checked': {
            color: palette.primary.main,
            '&.Mui-focusVisible': {
              backgroundColor: alpha(palette.primary.main, StateLayer.Focus)
            },
            '&:hover': {
              backgroundColor: alpha(palette.primary.main, StateLayer.Hover)
            },
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38)
          }
        }
      }
    }
  }
}
