
import {
  Theme,
  ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha
} from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3ToggleButtonGroup {
  MuiToggleButtonGroup: {
    defaultProps?: ComponentsProps['MuiToggleButtonGroup'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButtonGroup'];
    variants?: ComponentsVariants['MuiToggleButtonGroup'];
  }
}

export const getToggleButtonGroup = (theme: Theme): M3ToggleButtonGroup => {
  const { palette } = theme;
  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        firstButton: {
          borderBottomLeftRadius: '50px',
          borderTopLeftRadius: '50px',
        },
        lastButton: {
          borderBottomRightRadius: '50px',
          borderTopRightRadius: '50px',
        },
        grouped: {
          textTransform: 'none',
          borderColor: palette.outline.main,
          backgroundColor: 'transparent',
          color: palette.onSurface.main,
          '&.Mui-disabled': {
            borderColor: alpha(palette.onSurface.main, 0.12),
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&:hover': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover)
          },
          '&:focus': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus)
          },
          '&:active': {
            backgroundColor: alpha(palette.onSurface.main, StateLayer.Press)
          },
          '&.Mui-selected:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
          },
          '&.Mui-selected:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
          },
          '&.Mui-selected:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
          },
          '&.Mui-selected': {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main
          }
        },
      }
    },
  };
}
