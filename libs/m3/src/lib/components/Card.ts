
import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material';
import { alpha } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    filled: true;
  }
}

interface M3Card {
  MuiCard: {
    defaultProps?: ComponentsProps['MuiCard'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCard'];
    variants?: ComponentsVariants['MuiCard'];
  }
}

export const getCard = (theme: Theme): M3Card => {
  const { palette, shape, elevation, motion } = theme;
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: shape.corner.medium.all,
          padding: '10px 16px'
        }
      },
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            boxShadow: elevation.level1,
            backgroundColor: palette.surfaceContainerLow.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&.Mui-clickable:hover': {
              background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerLow.main, palette.onSurface.main),
              boxShadow: elevation.level2,
              cursor: 'pointer',
            },
            '&.Mui-clickable:focus': {
              boxShadow: elevation.level1,
              background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerLow.main, palette.onSurface.main)
            },
            '&.Mui-clickable:active': {
              boxShadow: elevation.level1,
              background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerLow.main, palette.onSurface.main)
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surfaceContainerLow.main, 0.38),
              color: palette.surfaceVariant.main,
              boxShadow: elevation.level1,
              cursor: 'default',
            },
          }
        },
        {
          props: { variant: 'filled' },
          style: {
            boxShadow: elevation.level0,
            backgroundColor: palette.surfaceContainerHighest.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&.Mui-clickable:hover': {
              background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.onSurface.main),
              boxShadow: elevation.level1,
              cursor: 'pointer',
            },
            '&.Mui-clickable:focus': {
              boxShadow: elevation.level0,
              background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHighest.main, palette.onSurface.main)
            },
            '&.Mui-clickable:active': {
              boxShadow: elevation.level1,
              background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.onSurface.main)
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surfaceContainerHighest.main, 0.38),
              color: palette.surfaceVariant.main,
              boxShadow: elevation.level0,
              cursor: 'default',
            },
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            boxShadow: elevation.level0,
            backgroundColor: palette.surface.main,
            borderColor: palette.outlineVariant.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&.Mui-clickable:hover': {
              background: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
              boxShadow: elevation.level1,
              cursor: 'pointer',
            },
            '&.Mui-clickable:focus': {
              boxShadow: elevation.level0,
              background: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main)
            },
            '&.Mui-clickable:active': {
              boxShadow: elevation.level2,
              background: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.onSurface.main)
            },
            '&.Mui-disabled': {
              backgroundColor: alpha(palette.surface.main, 0.38),
              borderColor: alpha(palette.outlineVariant.main, 0.12),
              boxShadow: elevation.level0,
              color: palette.surfaceVariant.main,
              cursor: 'default',
            },
          }
        }
      ]
    }
  };
}
