import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3ListSubheader {
  MuiListSubheader: {
    defaultProps?: ComponentsProps['MuiListSubheader'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiListSubheader'];
    variants?: ComponentsVariants['MuiListSubheader'];
  }
};

export const getListSubheader = (theme: Theme): M3ListSubheader => {
  const { palette } = theme;

  return {
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: palette.onSurfaceVariant.main
        },
      }
    }
  }
}
