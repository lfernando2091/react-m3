import { alpha, ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3Tabs {
  MuiTabs: {
    defaultProps?: ComponentsProps['MuiTabs'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
    variants?: ComponentsVariants['MuiTabs'];
  },
  MuiTab: {
    defaultProps?: ComponentsProps['MuiTab'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTab'];
    variants?: ComponentsVariants['MuiTab'];
  }
}

export const getTabs = (theme: Theme): M3Tabs => {
  const { palette } = theme;
  return {
    MuiTabs: {
      defaultProps: {
        textColor: 'primary',
        indicatorColor: 'primary',
      },
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.surfaceContainerHighest.main}`,
          // backgroundColor: palette.surface.main,
        }
      },
      variants: [
        {
          props: { indicatorColor: 'primary' },
          style: {
            '& .MuiTabs-indicator': {
              backgroundColor: palette.primary.main,
              borderRadius: '3px 3px 0 0',
              height: 3
            }
          }
        },
        {
          props: { indicatorColor: 'secondary' },
          style: {
            '& .MuiTabs-indicator': {
              backgroundColor: palette.primary.main
            }
          }
        }
      ]
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        textColorPrimary: {
          color: palette.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&.Mui-focusVisible': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&.Mui-selected': {
            color: palette.primary.main,
            '&:hover': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
              color: palette.primary.main
            },
            '&.Mui-focusVisible': {
              backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.primary.main),
              color: palette.primary.main
            },
            '&:active': {
              backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.primary.main),
              color: palette.primary.main
            },
          }
        },
        textColorSecondary: {
          color: palette.onSurfaceVariant.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&.Mui-focusVisible': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surface.main, palette.onSurface.main),
            color: palette.onSurface.main
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&.Mui-selected': {
            color: palette.onSurface.main
          }
        }
      }
    }
  }
}
