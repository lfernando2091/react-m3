import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3Drawer {
  MuiDrawer: {
    defaultProps?: ComponentsProps['MuiDrawer'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiDrawer'];
    variants?: ComponentsVariants['MuiDrawer'];
  }
}

export const getDrawer = (theme: Theme): M3Drawer => {
  const { palette, shape, elevation } = theme;
  return {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          width: '360px',
        }
      },
      styleOverrides: {
        root: {

        },
        docked: {
          '& .MuiPaper-root': {
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
          '& .MuiPaper-root': {
            // backgroundColor: palette.surfaceContainerLow.main
            // boxShadow: elevation.level1,
          }
        }
      }
    },
  }
}
