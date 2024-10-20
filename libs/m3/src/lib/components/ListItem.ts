import { Theme, ComponentsProps, ComponentsOverrides, ComponentsVariants } from "@mui/material";

interface M3ListItem {
    MuiListItem: {
        defaultProps?: ComponentsProps['MuiListItem'];
        styleOverrides?: ComponentsOverrides<Theme>['MuiListItem'];
        variants?: ComponentsVariants['MuiListItem'];
    }
};

export const getListItem = (theme: Theme): M3ListItem => {
  const { palette } = theme;
    return {
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingTop: 1,
                    paddingBottom: 1,
                    '& .MuiListItemButton-root': {
                        paddingTop: 8,
                        paddingBottom: 8,
                        color: palette.onSurfaceVariant.main,
                        '&.Mui-selected': {
                          color: palette.onSecondaryContainer.main,
                          fontWeight: 'bold'
                        }
                    },
                },
              divider: {
                  borderBottomColor: palette.outlineVariant.main
              }
            }
        }
    }
}
