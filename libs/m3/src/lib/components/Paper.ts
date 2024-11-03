import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

interface M3Paper {
  MuiPaper: {
    defaultProps?: ComponentsProps['MuiPaper'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiPaper'];
    variants?: ComponentsVariants['MuiPaper'];
  };
}

export const getPaper = (theme: Theme): M3Paper => {
  const { palette, elevation, shape } = theme;
  return {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: shape.corner.large.all
        },
        outlined: {
          backgroundColor: palette.surfaceContainerLow.main,
          borderColor: palette.outlineVariant.main,
        },
        elevation0: {
          backgroundColor: palette.surfaceContainerLowest.main,
          boxShadow: elevation.level0
        },
        elevation1: {
          backgroundColor: palette.surfaceContainerLow.main,
          boxShadow: elevation.level1
        },
        elevation2: {
          backgroundColor: palette.surfaceContainer.main,
          boxShadow: elevation.level2
        },
        elevation3: {
          backgroundColor: palette.surfaceContainerHigh.main,
          boxShadow: elevation.level3
        },
        elevation4: {
          backgroundColor: palette.surfaceContainerHigh.main,
          boxShadow: elevation.level4
        },
        elevation5: {
          backgroundColor: palette.surfaceContainerHighest.main,
          boxShadow: elevation.level5
        }
      }
    }
  }
}
