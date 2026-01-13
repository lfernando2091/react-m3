import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material';

interface M3Table {
  MuiTable: {
    defaultProps?: ComponentsProps['MuiTable'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTable'];
    variants?: ComponentsVariants['MuiTable'];
  };
  MuiTableHead: {
    defaultProps?: ComponentsProps['MuiTableHead'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableHead'];
    variants?: ComponentsVariants['MuiTableHead'];
  },
  MuiTableBody: {
    defaultProps?: ComponentsProps['MuiTableBody'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableBody'];
    variants?: ComponentsVariants['MuiTableBody'];
  },
  MuiTableCell: {
    defaultProps?: ComponentsProps['MuiTableCell'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableCell'];
    variants?: ComponentsVariants['MuiTableCell'];
  },
  MuiTableRow: {
    defaultProps?: ComponentsProps['MuiTableRow'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableRow'];
    variants?: ComponentsVariants['MuiTableRow'];
  },
  MuiTableContainer: {
    defaultProps?: ComponentsProps['MuiTableContainer'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTableContainer'];
    variants?: ComponentsVariants['MuiTableContainer'];
  }
}

export const getTable = (theme: Theme): M3Table => {
  const { palette, shape } = theme;
  return {
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
        },
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {

        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          'tr:last-of-type td, tr:last-of-type th': {
            borderBlockEnd: `1px solid ${palette.outlineVariant.main}`,
          },
          'tr:last-of-type td:first-child': {
            borderEndStartRadius: shape.corner.extraLarge.all,
          },
          'tr:last-of-type th:first-child': {
            borderEndStartRadius: shape.corner.extraLarge.all,
          },
          'tr:last-of-type td:last-of-type': {
            borderEndEndRadius: shape.corner.extraLarge.all,
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBlockStart: `1px solid ${palette.outlineVariant.main}`,
          borderInlineStart: `1px solid ${palette.outlineVariant.main}`,
          borderBottomWidth: `0px`,
          '&:last-child': {
            borderInlineEnd: `1px solid ${palette.outlineVariant.main}`,
          },
        },
        head: {
          backgroundColor: palette.surfaceContainer.main,
          color: palette.onSurface.main,
          '&:first-of-type': {
            borderStartStartRadius: shape.corner.extraLarge.all,
          },
          '&:last-of-type': {
            borderStartEndRadius: shape.corner.extraLarge.all,
          }
        },
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {

        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {

        }
      }
    }
  }
}
