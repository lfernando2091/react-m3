import {
  Theme,
  ComponentsProps, ComponentsOverrides, ComponentsVariants
} from '@mui/material';

interface M3Accordion {
  MuiAccordion: {
    defaultProps?: ComponentsProps['MuiAccordion'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion'];
    variants?: ComponentsVariants['MuiAccordion'];
  }
}

export const getAccordion = (theme: Theme): M3Accordion => {
  const { palette, elevation, shape } = theme;
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: elevation.level1,
          border: `0px solid ${palette.outlineVariant.main}`,
          color: palette.onBackground.main,
          backgroundColor: palette.surfaceBright.main,
          '&:before': {
            backgroundColor: palette.surfaceBright.main,
            display: 'none'
          },
          '&.Mui-disabled': {
            backgroundColor: palette.inverseOnSurface.main,
            color: palette.inverseSurface.main,
            border: `0px solid ${palette.outlineVariant.main}`,
          },
          '& .MuiAccordionSummary-root > .MuiAccordionSummary-expandIconWrapper ': {
            color: palette.onBackground.main
          },
          '&:first-of-type': {
            borderTopLeftRadius: shape.corner.large.all,
            borderTopRightRadius: shape.corner.large.all
          },
          '&:last-of-type': {
            borderBottomLeftRadius: shape.corner.large.all,
            borderBottomRightRadius: shape.corner.large.all
          }
        },
        region: {
          backgroundColor: palette.surfaceContainerLow.main
        }
      }
    }
  };
}
