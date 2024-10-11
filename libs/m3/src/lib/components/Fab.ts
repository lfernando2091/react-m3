import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3Fab {
    MuiFab: {
        defaultProps?: ComponentsProps['MuiFab'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiFab'];
        variants?: ComponentsVariants['MuiFab'];
    }
};

declare module '@mui/material/Fab' {
    interface FabPropsColorOverrides {
        primary: true,
        surface: true,
        secondary: true,
        tertiary: true,

        success: false,
        info: false,
        warning: false,
        error: false,
        default: false,
        inherit: false
    }
}

export const getFab = (theme: Theme): M3Fab => {
    const { palette, elevation } = theme;
    return {
        MuiFab: {
            defaultProps: { color: 'secondary' },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: elevation.level3,
                    borderRadius: '16px'
                },
                extended: {
                    paddingInlineEnd: '20px',
                    '> svg': {
                      marginInlineEnd: '12px',
                    }
                }
            },
            variants: [
                {
                    props: { color: 'primary' },
                    style:
                    {
                        backgroundColor: palette.primaryContainer.main,
                        color: palette.onPrimaryContainer.main,
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.primaryContainer.main, palette.onPrimaryContainer.main),
                            boxShadow: elevation.level4
                        },
                        '&:focus': {
                            background: getStateLayerColor(StateLayer.Focus, palette.primaryContainer.main, palette.onPrimaryContainer.main),
                            boxShadow: elevation.level3
                        },
                        '&:active': {
                            background: getStateLayerColor(StateLayer.Press, palette.primaryContainer.main, palette.onPrimaryContainer.main),
                            boxShadow: elevation.level3
                        },
                    }

                },
                {
                    props: { color: 'secondary' },
                    style:
                    {
                        backgroundColor: palette.secondaryContainer.main,
                        color: palette.onSecondaryContainer.main,
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            boxShadow: elevation.level4
                        },
                        '&:focus': {
                            background: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            boxShadow: elevation.level3
                        },
                        '&:active': {
                            background: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
                            boxShadow: elevation.level3
                        },
                    }

                },
                {
                    props: { color: 'surface' },
                    style:
                    {
                        backgroundColor: palette.surfaceContainerHigh.main,
                        color: palette.primary.main,
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHigh.main, palette.primary.main),
                            boxShadow: elevation.level4
                        },
                        '&:focus': {
                            background: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHigh.main, palette.primary.main),
                            boxShadow: elevation.level3
                        },
                        '&:active': {
                            background: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHigh.main, palette.primary.main),
                            boxShadow: elevation.level3
                        },
                    }
                },
                {
                    props: { color: 'tertiary' },
                    style: {
                        backgroundColor: palette.tertiaryContainer.main,
                        color: palette.onTertiaryContainer.main,
                        '&:hover': {
                            background: getStateLayerColor(StateLayer.Hover, palette.tertiaryContainer.main, palette.onTertiaryContainer.main),
                            boxShadow: elevation.level4
                        },
                        '&:focus': {
                            background: getStateLayerColor(StateLayer.Focus, palette.tertiaryContainer.main, palette.onTertiaryContainer.main),
                            boxShadow: elevation.level3
                        },
                        '&:active': {
                            background: getStateLayerColor(StateLayer.Press, palette.tertiaryContainer.main, palette.onTertiaryContainer.main),
                            boxShadow: elevation.level3
                        },
                    }

                }
            ]
        }
    }
}
