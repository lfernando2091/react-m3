import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';
import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;

    headlineLarge:  React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineSmall: React.CSSProperties;

    titleLarge:  React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;

    bodyLarge:  React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;

    labelLarge:  React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;

    emphasizedDisplayLarge: React.CSSProperties;
    emphasizedDisplayMedium: React.CSSProperties;
    emphasizedDisplaySmall: React.CSSProperties;

    emphasizedHeadlineLarge:  React.CSSProperties;
    emphasizedHeadlineMedium: React.CSSProperties;
    emphasizedHeadlineSmall: React.CSSProperties;

    emphasizedTitleLarge:  React.CSSProperties;
    emphasizedTitleMedium: React.CSSProperties;
    emphasizedTitleSmall: React.CSSProperties;

    emphasizedBodyLarge:  React.CSSProperties;
    emphasizedBodyMedium: React.CSSProperties;
    emphasizedBodySmall: React.CSSProperties;

    emphasizedLabelLarge:  React.CSSProperties;
    emphasizedLabelMedium: React.CSSProperties;
    emphasizedLabelSmall: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;

    headlineLarge?:  React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;

    titleLarge?:  React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;

    bodyLarge?:  React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;

    labelLarge?:  React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;

    emphasizedDisplayLarge?: React.CSSProperties;
    emphasizedDisplayMedium?: React.CSSProperties;
    emphasizedDisplaySmall?: React.CSSProperties;

    emphasizedHeadlineLarge?:  React.CSSProperties;
    emphasizedHeadlineMedium?: React.CSSProperties;
    emphasizedHeadlineSmall?: React.CSSProperties;

    emphasizedTitleLarge?:  React.CSSProperties;
    emphasizedTitleMedium?: React.CSSProperties;
    emphasizedTitleSmall?: React.CSSProperties;

    emphasizedBodyLarge?:  React.CSSProperties;
    emphasizedBodyMedium?: React.CSSProperties;
    emphasizedBodySmall?: React.CSSProperties;

    emphasizedLabelLarge?:  React.CSSProperties;
    emphasizedLabelMedium?: React.CSSProperties;
    emphasizedLabelSmall?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;

    headlineLarge: true;
    headlineMedium: true;
    headlineSmall: true;

    titleLarge: true;
    titleMedium: true;
    titleSmall: true;

    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;

    labelLarge: true;
    labelMedium: true;
    labelSmall: true;

    emphasizedDisplayLarge: true;
    emphasizedDisplayMedium: true;
    emphasizedDisplaySmall: true;

    emphasizedHeadlineLarge: true;
    emphasizedHeadlineMedium: true;
    emphasizedHeadlineSmall: true;

    emphasizedTitleLarge: true;
    emphasizedTitleMedium: true;
    emphasizedTitleSmall: true;

    emphasizedBodyLarge: true;
    emphasizedBodyMedium: true;
    emphasizedBodySmall: true;

    emphasizedLabelLarge?: true;
    emphasizedLabelMedium?: true;
    emphasizedLabelSmall?: true;
  }
}

interface M3Typography {
  MuiTypography: {
    defaultProps?: ComponentsProps['MuiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
  }
}

interface M3TypographyBaseLine {
  displayLarge: React.CSSProperties,
  displayMedium:  React.CSSProperties,
  displaySmall:  React.CSSProperties,

  headlineLarge: React.CSSProperties,
  headlineMedium: React.CSSProperties,
  headlineSmall: React.CSSProperties,

  titleLarge:  React.CSSProperties,
  titleMedium: React.CSSProperties,
  titleSmall: React.CSSProperties,

  bodyLarge:  React.CSSProperties,
  bodyMedium: React.CSSProperties,
  bodySmall: React.CSSProperties,

  labelLarge:  React.CSSProperties,
  labelMedium: React.CSSProperties,
  labelSmall: React.CSSProperties,

  emphasizedDisplayLarge: React.CSSProperties,
  emphasizedDisplayMedium: React.CSSProperties,
  emphasizedDisplaySmall: React.CSSProperties,

  emphasizedHeadlineLarge: React.CSSProperties,
  emphasizedHeadlineMedium: React.CSSProperties,
  emphasizedHeadlineSmall: React.CSSProperties,

  emphasizedTitleLarge:  React.CSSProperties,
  emphasizedTitleMedium: React.CSSProperties,
  emphasizedTitleSmall: React.CSSProperties,

  emphasizedBodyLarge:  React.CSSProperties,
  emphasizedBodyMedium: React.CSSProperties,
  emphasizedBodySmall: React.CSSProperties,

  emphasizedLabelLarge:  React.CSSProperties,
  emphasizedLabelMedium: React.CSSProperties,
  emphasizedLabelSmall: React.CSSProperties
}

export const getTypography = (theme: Theme): M3Typography => {
  const { palette } = theme;
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: palette.onSurface.main
        }
      },
      defaultProps: {
        variantMapping: {
          displayLarge: "h1",
          displayMedium: "h2",
          displaySmall: "h3",

          headlineLarge: "h4",
          headlineMedium: "h5",
          headlineSmall: "h6",

          titleLarge: "h6",
          titleMedium: "h6",
          titleSmall: "h6",

          bodyLarge: "p",
          bodyMedium: "p",
          bodySmall: "p",

          labelLarge: "span",
          labelMedium: "span",
          labelSmall: "span",

          emphasizedDisplayLarge: "h1",
          emphasizedDisplayMedium: "h2",
          emphasizedDisplaySmall: "h3",

          emphasizedHeadlineLarge: "h4",
          emphasizedHeadlineMedium: "h5",
          emphasizedHeadlineSmall: "h6",

          emphasizedTitleLarge: "h6",
          emphasizedTitleMedium: "h6",
          emphasizedTitleSmall: "h6",

          emphasizedBodyLarge: "p",
          emphasizedBodyMedium: "p",
          emphasizedBodySmall: "p",

          emphasizedLabelLarge:  "span",
          emphasizedLabelMedium: "span",
          emphasizedLabelSmall: "span"
        }
      }
    }
  };
}


export const getTypographyBaseLine = (): M3TypographyBaseLine => {
  return {
    displayLarge: {
      fontWeight: 400,
      fontSize: "57pt",
      letterSpacing: "-0.25pt",
      lineHeight: "64pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 57, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    displayMedium: {
      fontWeight: 400,
      fontSize: "45pt",
      letterSpacing: "0pt",
      lineHeight: "52pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 45, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    displaySmall: {
      fontWeight: 400,
      fontSize: "36pt",
      letterSpacing: "0pt",
      lineHeight: "44pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 36, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    headlineLarge: {
      fontWeight: 400,
      fontSize: "32pt",
      letterSpacing: "0pt",
      lineHeight: "40pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 32, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    headlineMedium: {
      fontWeight: 400,
      fontSize: "28pt",
      letterSpacing: "0pt",
      lineHeight: "36pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 28, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    headlineSmall: {
      fontWeight: 400,
      fontSize: "24pt",
      letterSpacing: "0pt",
      lineHeight: "32pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 24, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    titleLarge: {
      fontWeight: 400,
      fontSize: "22pt",
      letterSpacing: "0pt",
      lineHeight: "28pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 22, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    titleMedium: {
      fontWeight: 500,
      fontSize: "16pt",
      letterSpacing: "0.15pt",
      lineHeight: "24pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 16, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    titleSmall: {
      fontWeight: 500,
      fontSize: "14pt",
      letterSpacing: "0.1pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    bodyLarge: {
      fontWeight: 400,
      fontSize: "16pt",
      letterSpacing: "0.5pt",
      lineHeight: "24pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 16, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    bodyMedium: {
      fontWeight: 400,
      fontSize: "14pt",
      letterSpacing: "0.25pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    bodySmall: {
      fontWeight: 400,
      fontSize: "12pt",
      letterSpacing: "0.4pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 400, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 12, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    labelLarge: {
      fontWeight: 500,
      fontSize: "14pt",
      letterSpacing: "0.1pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    labelMedium: {
      fontWeight: 500,
      fontSize: "12pt",
      letterSpacing: "0.5pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 12, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    labelSmall: {
      fontWeight: 500,
      fontSize: "11pt",
      letterSpacing: "0.5pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 11, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },

    emphasizedDisplayLarge: {
      fontWeight: 500,
      fontSize: "57pt",
      letterSpacing: "-0.25pt",
      lineHeight: "64pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 57, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedDisplayMedium: {
      fontWeight: 500,
      fontSize: "45pt",
      letterSpacing: "0pt",
      lineHeight: "52pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 45, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedDisplaySmall: {
      fontWeight: 500,
      fontSize: "36pt",
      letterSpacing: "0pt",
      lineHeight: "44pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 36, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedHeadlineLarge: {
      fontWeight: 500,
      fontSize: "32pt",
      letterSpacing: "0pt",
      lineHeight: "40pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 32, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedHeadlineMedium: {
      fontWeight: 500,
      fontSize: "28pt",
      letterSpacing: "0pt",
      lineHeight: "36pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 28, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedHeadlineSmall: {
      fontWeight: 500,
      fontSize: "24pt",
      letterSpacing: "0pt",
      lineHeight: "32pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 24, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedTitleLarge: {
      fontWeight: 500,
      fontSize: "22pt",
      letterSpacing: "0pt",
      lineHeight: "28pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 22, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedTitleMedium: {
      fontWeight: 600,
      fontSize: "16pt",
      letterSpacing: "0.15pt",
      lineHeight: "24pt",
      fontVariationSettings: `'wght' 600, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 16, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedTitleSmall: {
      fontWeight: 600,
      fontSize: "14pt",
      letterSpacing: "0.1pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 600, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedBodyLarge: {
      fontWeight: 500,
      fontSize: "16pt",
      letterSpacing: "0.5pt",
      lineHeight: "24pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 16, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedBodyMedium: {
      fontWeight: 500,
      fontSize: "14pt",
      letterSpacing: "0.25pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedBodySmall: {
      fontWeight: 500,
      fontSize: "12pt",
      letterSpacing: "0.4pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 500, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 12, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedLabelLarge: {
      fontWeight: 700,
      fontSize: "14pt",
      letterSpacing: "0.1pt",
      lineHeight: "20pt",
      fontVariationSettings: `'wght' 600, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 14, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedLabelMedium: {
      fontWeight: 700,
      fontSize: "12pt",
      letterSpacing: "0.5pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 600, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 12, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
    emphasizedLabelSmall: {
      fontWeight: 700,
      fontSize: "11pt",
      letterSpacing: "0.5pt",
      lineHeight: "16pt",
      fontVariationSettings: `'wght' 600, 'GRAD' 0, 'wdth' 100, 'ROND' 0, 'opsz' 11, 'CRSV' 0, 'slnt' 0, 'FILL' 0, 'HEXP' 0`
    },
  }
}
