import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3CssBaseline {
  MuiCssBaseline: {
    defaultProps?: ComponentsProps['MuiCssBaseline'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline'];
    variants?: ComponentsVariants['MuiCssBaseline'];
  }
}

export const getCssBaseline = (theme: Theme): M3CssBaseline => {
  const { palette, shape } = theme;
  return {
    MuiCssBaseline: {
      defaultProps: {
        enableColorScheme: true,
      },
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: '8px'
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: palette.primary.main,
          borderRadius: shape.corner.large.all
        },
        "html": {
          scrollbarColor: `${palette.primary.main} transparent`,
          scrollbarWidth: 'thin'
        }
      }
    }
  }
}
