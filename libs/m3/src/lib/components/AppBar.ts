import {
    Theme,
    ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3AppBar {
    MuiAppBar: {
        defaultProps?: ComponentsProps['MuiAppBar'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar'];
        variants?: ComponentsVariants['MuiAppBar'];
    }
}

export const getAppBar = (theme: Theme): M3AppBar => {
    const { palette, elevation, motion } = theme;
    return {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                color: 'default'
            },
            styleOverrides: {
              root: {
                transition: theme.transitions.create(
                  ['background-color', 'box-shadow', 'color'],
                  {
                    duration: motion.duration.medium1,
                    easing: motion.easing.emphasized.default
                  }
                ),
                '&.Mui-scroll': {
                  boxShadow: elevation.level2,
                  color: palette.onSurface.main
                }
              },
              colorDefault: {
                backgroundColor: palette.surface.main,
                color: palette.onSurface.main,
                '&.Mui-scroll': {
                  backgroundColor: palette.surfaceContainer.main
                }
              },
              colorPrimary: {
                backgroundColor: palette.surfaceContainer.main,
                color: palette.onSurface.main,
                '&.Mui-scroll': {
                  backgroundColor: palette.surface.main
                }
              }
            }
        }
    };
}
