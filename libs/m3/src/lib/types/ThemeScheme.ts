import { DarkTokensDefault, LightTokensDefault, ThemeTokens } from './ThemeTokens';
import { TonalPalette, TonalPaletteDefault } from './TonalPalette';
import { Motion, MotionDefault } from './Motion';
import { Elevation, ElevationDefault } from './Elevation';

export type ThemeScheme = {
  tones: TonalPalette;
  motion?: Motion;
  elevation?: Elevation;
  light: ThemeTokens;
  "light-medium-contrast"?: ThemeTokens;
  "light-high-contrast"?: ThemeTokens;
  dark: ThemeTokens;
  "dark-medium-contrast"?: ThemeTokens;
  "dark-high-contrast"?: ThemeTokens;
}

export const ThemeSchemeDefault: ThemeScheme = {
  tones: TonalPaletteDefault,
  light: LightTokensDefault,
  dark: DarkTokensDefault,
  motion: MotionDefault,
  elevation: ElevationDefault
}
