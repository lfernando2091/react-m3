import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3Menu {
  MuiMenu: {
    defaultProps?: ComponentsProps['MuiMenu'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiMenu'];
    variants?: ComponentsVariants['MuiMenu'];
  },
  MuiMenuItem: {
    defaultProps?: ComponentsProps['MuiMenuItem'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiMenuItem'];
    variants?: ComponentsVariants['MuiMenuItem'];
  }
}

export const getMenu = (theme: Theme): M3Menu => {
  const { palette, shape, elevation } = theme;
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover)
          },
          '&.Mui-focusVisible': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus)
          },
          '&.Mui-selected': {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
            },
            '&.Mui-focusVisible': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
            }
          }
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.surfaceContainer.main,
          borderRadius: shape.corner.extraSmall.all,
          boxShadow: elevation.level2
        }
      }
    }
  }
}
