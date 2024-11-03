import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from '@mui/material';

interface M3Drawer {
  MuiDrawer: {
    defaultProps?: ComponentsProps['MuiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDrawer'];
    variants?: ComponentsVariants['MuiDrawer'];
  }
}

export const getDrawer = (theme: Theme): M3Drawer => {
  const { palette, shape, elevation, motion } = theme;
  return {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          width: '360px',
        }
      },
      styleOverrides: {
        docked: {
          '&.MuiDrawer-docked .MuiPaper-root': {
            transition: theme.transitions.create(
              ['box-shadow', 'transform'],
              {
                duration: motion.duration.medium2,
                easing: motion.easing.emphasized.default
              },
            ),
            '&:hover': {
              boxShadow: elevation.level2
            },
            backgroundColor: palette.surface.main,
            boxShadow: elevation.level0
          }
        },
        paper: {
          border: '0px',
          color: palette.onSurfaceVariant.main,
          borderRadius: shape.corner.large.end
        },
        modal: {
          '&.MuiDrawer-modal .MuiPaper-root': {
            backgroundColor: palette.surfaceContainerLow.main,
            boxShadow: elevation.level1,
          },
          '&.MuiDrawer-modal .MuiModal-backdrop': {
            backgroundColor: alpha(palette.scrim.main, 0.32),
          }
        }
      }
    },
  }
}
