import { TonalPalette } from '../types/TonalPalette';
import { ThemeOptions, PaletteColor, PaletteColorOptions } from '@mui/material';
import { Motion } from '../types/Motion';
import { Elevation } from '../types/Elevation';
import { Shape } from '../types/Shape';

declare module '@mui/material/styles/createThemeNoVars' {
  interface Theme {
    tones: TonalPalette,
    motion: Motion,
    elevation: Elevation,
    shape: Shape
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    tones?: TonalPalette,
    motion?: Motion,
    elevation?: Elevation,
    shape?: Shape
  }
}

export interface M3Palette {
  onPrimary: PaletteColor;
  primaryContainer: PaletteColor;
  onPrimaryContainer: PaletteColor;

  onSecondary: PaletteColor;
  secondaryContainer: PaletteColor;
  onSecondaryContainer: PaletteColor;

  tertiary: PaletteColor;
  onTertiary: PaletteColor;
  tertiaryContainer: PaletteColor;
  onTertiaryContainer: PaletteColor;

  onError: PaletteColor;
  errorContainer: PaletteColor;
  onErrorContainer: PaletteColor;

  primaryFixed: PaletteColor;
  primaryFixedDim: PaletteColor;
  onPrimaryFixed: PaletteColor;
  onPrimaryFixedVariant: PaletteColor;

  secondaryFixed: PaletteColor;
  secondaryFixedDim: PaletteColor;
  onSecondaryFixed: PaletteColor;
  onSecondaryFixedVariant: PaletteColor;

  tertiaryFixed: PaletteColor;
  tertiaryFixedDim: PaletteColor;
  onTertiaryFixed: PaletteColor;
  onTertiaryFixedVariant: PaletteColor;

  surface: PaletteColor;
  onSurface: PaletteColor;

  surfaceDim: PaletteColor;
  surfaceBright: PaletteColor;

  surfaceContainerLowest: PaletteColor;
  surfaceContainerLow: PaletteColor;
  surfaceContainer: PaletteColor;
  surfaceContainerHigh: PaletteColor;
  surfaceContainerHighest: PaletteColor;

  surfaceVariant: PaletteColor;
  onSurfaceVariant: PaletteColor;

  outline: PaletteColor;
  outlineVariant: PaletteColor;

  inversePrimary: PaletteColor;
  inverseOnPrimary: PaletteColor;
  inverseSurface: PaletteColor;
  inverseOnSurface: PaletteColor;

  shadow: PaletteColor;
  scrim: PaletteColor;

  surfaceTintColor: PaletteColor;

  onBackground: PaletteColor;

  onInfo: PaletteColor;
  infoContainer: PaletteColor;
  onInfoContainer: PaletteColor;

  onSuccess: PaletteColor;
  successContainer: PaletteColor;
  onSuccessContainer: PaletteColor;

  onWarning: PaletteColor;
  warningContainer: PaletteColor;
  onWarningContainer: PaletteColor;
}

declare module '@mui/material/styles/createPalette' {

  interface M3PaletteOptions extends Record<keyof M3Palette, PaletteColorOptions> {
    themeMode: string;
  }

  interface Palette extends M3Palette {
    /* empty */
  }

  interface PaletteOptions extends M3PaletteOptions {
    /* empty */
  }
}
