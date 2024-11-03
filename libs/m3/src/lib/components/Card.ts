
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
          '& .MuiCardContent-root': {
            padding: '10px 16px'
          }
        }
      },
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            backgroundColor: palette.surfaceContainerLow.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&:has(> .MuiCardActionArea-root)': {
              boxShadow: elevation.level1,
              '&:hover': {
                boxShadow: elevation.level2,
              },
              '&:focus': {
                boxShadow: elevation.level1,
              },
              '&:active': {
                boxShadow: elevation.level1,
              },
              '& .MuiCardActionArea-root:hover': {
                backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerLow.main, palette.onSurface.main)
              },
              '& .MuiCardActionArea-root:focus': {
                backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerLow.main, palette.onSurface.main)
              },
              '& .MuiCardActionArea-root:active': {
                backgroundColor: getStateLayerColor(StateLayer.Press, palette.surfaceContainerLow.main, palette.onSurface.main)
              }
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
            backgroundColor: palette.surfaceContainerHighest.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&:has(> .MuiCardActionArea-root)': {
              boxShadow: elevation.level0,
              '&:hover': {
                boxShadow: elevation.level1,
              },
              '&:focus': {
                boxShadow: elevation.level0,
              },
              '&:active': {
                boxShadow: elevation.level1,
              },
              '& .MuiCardActionArea-root:hover': {
                backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.onSurface.main),
              },
              '& .MuiCardActionArea-root:focus': {
                backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHighest.main, palette.onSurface.main)
              },
              '& .MuiCardActionArea-root:active': {
                backgroundColor: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.onSurface.main)
              }
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
            backgroundColor: palette.surface.main,
            borderColor: palette.outlineVariant.main,
            transition: theme.transitions.create(
              ['background-color', 'box-shadow', 'border-color', 'color'],
              {
                duration: motion.duration.medium1,
                easing: motion.easing.emphasized.default
              },
            ),
            '&:has(> .MuiCardActionArea-root)': {
              boxShadow: elevation.level0,
              '&:hover': {
                boxShadow: elevation.level1,
              },
              '&:focus': {
                boxShadow: elevation.level0,
              },
              '&:active': {
                boxShadow: elevation.level2,
              },
              '& .MuiCardActionArea-root:hover': {
                backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
              },
              '& .MuiCardActionArea-root:focus': {
                backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main)
              },
              '& .MuiCardActionArea-root:active': {
                backgroundColor: getStateLayerColor(StateLayer.Press, palette.surface.main, palette.onSurface.main)
              }
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
