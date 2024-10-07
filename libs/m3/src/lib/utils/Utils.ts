import { ThemeTokens } from '../types/ThemeTokens';
import { TonalPalette } from '../types/TonalPalette';
import { ThemeMode, ThemeStyle } from '../types/ThemeMode';
import { argbFromHex, CustomColor, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities';
import { Tone } from '../types/Tone';
import { createTheme } from '@mui/material/styles';
import { getM3Palette } from './M3Palette';
import { deepmerge } from '@mui/utils';
import { Theme } from '@mui/material';
import { ThemeSchemeDefault } from '../types/ThemeScheme';
import { getMUIComponents } from './MUIComponents';

const blueColorHex = '#0288d1';
const greenColorHex = '#2e7d32';
const yellowColorHex = '#f59e0b';

const customColorsGroup: CustomColor[] = [
  {
    name: 'info',
    value: argbFromHex(blueColorHex),
    blend: true
  },
  {
    name: 'success',
    value: argbFromHex(greenColorHex),
    blend: true
  },
  {
    name: 'warning',
    value: argbFromHex(yellowColorHex),
    blend: true
  }
];

const LEVELS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100];

type Tones = {
  [name: string]: Record<string, string>;
}

const getColorToken = (themeMode: ThemeMode,
                       palette: Tone,
                       lightLevel: number,
                       darkLevel: number): string =>
  palette[themeMode === 'light' ? lightLevel : darkLevel];

export const getDesignTokens = (themeMode: ThemeStyle, tonalPalette: TonalPalette): ThemeTokens => {
  const { primary, secondary, tertiary, neutral, neutralVariant, error } = tonalPalette;

  const { customColors } = themeFromSourceColor(argbFromHex(tonalPalette.primary[40]), customColorsGroup);
  const infoColors = customColors[0];
  const successColors = customColors[1];
  const warningColors = customColors[2];

  return {
    primary: getColorToken(themeMode, primary, 40, 80),
    onPrimary: getColorToken(themeMode, primary, 100, 20),
    primaryContainer: getColorToken(themeMode, primary, 90, 30),
    onPrimaryContainer: getColorToken(themeMode, primary, 10, 90),

    secondary: getColorToken(themeMode, secondary, 40, 80),
    onSecondary: getColorToken(themeMode, secondary, 100, 20),
    secondaryContainer: getColorToken(themeMode, secondary, 90, 30),
    onSecondaryContainer: getColorToken(themeMode, secondary, 10, 90),

    tertiary: getColorToken(themeMode, tertiary, 40, 80),
    onTertiary: getColorToken(themeMode, tertiary, 100, 20),
    tertiaryContainer: getColorToken(themeMode, tertiary, 90, 30),
    onTertiaryContainer: getColorToken(themeMode, tertiary, 10, 90),

    error: getColorToken(themeMode, error, 40, 80),
    onError: getColorToken(themeMode, error, 100, 20),
    errorContainer: getColorToken(themeMode, error, 90, 30),
    onErrorContainer: getColorToken(themeMode, error, 10, 90),

    primaryFixed: getColorToken(themeMode, primary, 90, 90),
    primaryFixedDim: getColorToken(themeMode, primary, 80, 80),
    onPrimaryFixed: getColorToken(themeMode, primary, 10, 10),
    onPrimaryFixedVariant: getColorToken(themeMode, primary, 30, 30),

    secondaryFixed: getColorToken(themeMode, secondary, 90, 90),
    secondaryFixedDim: getColorToken(themeMode, secondary, 80, 80),
    onSecondaryFixed: getColorToken(themeMode, secondary, 10, 10),
    onSecondaryFixedVariant: getColorToken(themeMode, secondary, 30, 30),

    tertiaryFixed: getColorToken(themeMode, tertiary, 90, 90),
    tertiaryFixedDim: getColorToken(themeMode, tertiary, 80, 80),
    onTertiaryFixed: getColorToken(themeMode, tertiary, 10, 10),
    onTertiaryFixedVariant: getColorToken(themeMode, tertiary, 30, 30),

    surface: getColorToken(themeMode, neutral, 98, 6),
    onSurface: getColorToken(themeMode, neutral, 10, 90),

    surfaceDim: getColorToken(themeMode, neutral, 87, 6),
    surfaceBright: getColorToken(themeMode, neutral, 98, 24),

    surfaceContainerLowest: getColorToken(themeMode, neutral, 100, 4),
    surfaceContainerLow: getColorToken(themeMode, neutral, 96, 10),
    surfaceContainer: getColorToken(themeMode, neutral, 94, 12),
    surfaceContainerHigh: getColorToken(themeMode, neutral, 92, 17),
    surfaceContainerHighest: getColorToken(themeMode, neutral, 90, 22),

    surfaceVariant: getColorToken(themeMode, neutralVariant, 90, 30),
    onSurfaceVariant: getColorToken(themeMode, neutralVariant, 30, 80),

    outline: getColorToken(themeMode, neutralVariant, 50, 60),
    outlineVariant: getColorToken(themeMode, neutralVariant, 80, 30),

    inverseSurface: getColorToken(themeMode, neutral, 20, 90),
    inverseOnSurface: getColorToken(themeMode, neutral, 95, 20),

    inversePrimary: getColorToken(themeMode, primary, 80, 40),
    inverseOnPrimary: getColorToken(themeMode, primary, 10, 90),

    shadow: getColorToken(themeMode, neutral, 0, 0),
    scrim: getColorToken(themeMode, neutral, 0, 0),

    surfaceTintColor: getColorToken(themeMode, primary, 40, 80),

    background: getColorToken(themeMode, neutral, 98, 6),
    onBackground: getColorToken(themeMode, neutral, 10, 90),

    info: hexFromArgb(infoColors[themeMode].color),
    onInfo: hexFromArgb(infoColors[themeMode].onColor),
    infoContainer: hexFromArgb(infoColors[themeMode].colorContainer),
    onInfoContainer: hexFromArgb(infoColors[themeMode].onColorContainer),

    success: hexFromArgb(successColors[themeMode].color),
    onSuccess: hexFromArgb(successColors[themeMode].onColor),
    successContainer: hexFromArgb(successColors[themeMode].colorContainer),
    onSuccessContainer: hexFromArgb(successColors[themeMode].onColorContainer),

    warning: hexFromArgb(warningColors[themeMode].color),
    onWarning: hexFromArgb(warningColors[themeMode].onColor),
    warningContainer: hexFromArgb(warningColors[themeMode].colorContainer),
    onWarningContainer: hexFromArgb(warningColors[themeMode].onColorContainer)
  };
}

export const getPalette = (hexColor: string): TonalPalette => {
  const rgbaColor = argbFromHex(hexColor);
  const { palettes } = themeFromSourceColor(rgbaColor);
  const tones: Tones = {};
  for (const [key, palette] of Object.entries(palettes)) {
    const toneLevel: Record<string, string> = {}
    for (const level of LEVELS) {
      toneLevel[level] = hexFromArgb(palette.tone(level));
    }
    tones[key] = toneLevel;
  }
  return tones as TonalPalette;
}

export const getTheme = (themeMode: ThemeStyle, tonalPalette: TonalPalette): Theme => {
  const lightTokens = getDesignTokens('light', tonalPalette);
  const darkTokens = getDesignTokens('dark', tonalPalette);
  const customTheme = createTheme(getM3Palette(themeMode, {
    ...ThemeSchemeDefault,
    light: lightTokens,
    dark: darkTokens,
    tones: tonalPalette
  }));
  return deepmerge<Theme>(customTheme, getMUIComponents(customTheme))
}
