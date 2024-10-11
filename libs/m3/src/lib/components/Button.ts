
import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from '@mui/material';
import { StateLayer, getStateLayerColor } from '../utils/StateLayerColor';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    elevated: true;
    filled: true;
    tonal: true;
    outlined: true;
    text: true;
    contained: false;
  }

  interface ButtonPropsColorOverrides {
    tertiary: true;
    surface: true;
  }
}

interface M3Button {
  MuiButton: {
    defaultProps?: ComponentsProps['MuiButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
    variants?: ComponentsVariants['MuiButton'];
  }
}

export const getButton = (theme: Theme): M3Button => {
  const { palette, elevation, shape } = theme;
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          paddingInlineStart: 24,
          paddingInlineEnd: 24,
          minHeight: 40,
          '&:has(>svg)': {
            padding: '8px',
            borderRadius: shape.corner.full.all,
            minWidth: '1em',
            minHeight: '1em'
          }
        }
      },
      variants: [
        {
          props: { variant: 'elevated' },
          style: {
            boxShadow: elevation.level1,
            backgroundColor: palette.surfaceContainerLow.main,
            color: palette.primary.main,
            '&:hover': {
              background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerLow.main, palette.primary.main),
              boxShadow: elevation.level2
            },
            '&:focus': {
              background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerLow.main, palette.primary.main)
            },
            '&:active': {
              background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerLow.main, palette.primary.main)
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: elevation.level0
            },
          }
        },
        {
          props: { variant: 'filled' },
          style: {
            backgroundColor: palette.primary.main,
            color: palette.onPrimary.main,
            boxShadow: elevation.level0,
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: elevation.level0,
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.primary.main, palette.onPrimary.main),
              boxShadow: elevation.level1,
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.primary.main, palette.onPrimary.main),
              boxShadow: elevation.level0,
            },
            '&:active': {
              backgroundColor: getStateLayerColor(StateLayer.Press, palette.primary.main, palette.onPrimary.main),
              boxShadow: elevation.level0,
            }
          }
        },
        {
          props: { variant: 'tonal' },
          style: {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
            boxShadow: elevation.level0,
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
              boxShadow: elevation.level0,
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
              boxShadow: elevation.level1
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
              boxShadow: elevation.level0,
            },
            '&:active': {
              backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
              boxShadow: elevation.level0,
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: palette.primary.main,
            borderColor: palette.outline.main,
            borderWidth: '1px',
            boxShadow: elevation.level0,
            '&.Mui-disabled': {
              borderColor: alpha(palette.onSurface.main, 0.12),
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
              borderColor: getStateLayerColor(StateLayer.Hover, palette.outline.main, palette.primary.main),
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.primary.main),
              borderColor: getStateLayerColor(StateLayer.Focus, palette.primary.main, palette.primary.main),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.primary.main),
              borderColor: getStateLayerColor(StateLayer.Press, palette.outline.main, palette.primary.main),
            }
          }
        },
        {
          props: { variant: 'text' },
          style: {
            backgroundColor: 'transparent',
            color: palette.primary.main,
            boxShadow: elevation.level0,
            paddingInlineStart: 12,
            paddingInlineEnd: 12,
            '&.Mui-disabled': {
              color: alpha(palette.onSurface.main, 0.38),
            },
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
            },
            '&:focus': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.primary.main),
            },
            '&:active': {
              backgroundColor: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.primary.main),
            },
          }
        }
      ]
    }
  };
}
