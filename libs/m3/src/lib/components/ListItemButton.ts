import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants, alpha } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3ListItemButton {
    MuiListItemButton: {
        defaultProps?: ComponentsProps['MuiListItemButton'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItemButton'];
        variants?: ComponentsVariants['MuiListItemButton'];
    }
};

export const getListItemButton = (theme: Theme): M3ListItemButton => {
    const { palette, motion } = theme;
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 50,
                    color: palette.onSurfaceVariant.main,
                    transition: theme.transitions.create(
                      ['background-color', 'color'],
                      {
                        duration: motion.duration.short3,
                        easing: motion.easing.emphasized.default
                      },
                    ),
                    '&:hover': {
                        backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover)
                    },
                    '&:focus': {
                        backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus)
                    },
                    '&:active': {
                        backgroundColor: alpha(palette.onSurface.main, StateLayer.Press)
                    },
                    '&.Mui-selected': {
                        color: palette.onSecondaryContainer.main,
                        backgroundColor: palette.secondaryContainer.main,
                        '& > .MuiListItemText-root > .MuiTypography-root': {
                          fontWeight: 'bold'
                        },
                        '& > .MuiListItemIcon-root': {
                          fontWeight: 'bold'
                        },
                        '&:hover': {
                          backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
                        },
                        '&:focus': {
                          backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
                        },
                        '&:active': {
                          backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
                        },
                    }
                },
            }
        }
    }
}
