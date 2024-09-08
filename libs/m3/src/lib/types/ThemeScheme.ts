import { DarkTokensDefault, LightTokensDefault, ThemeTokens } from './ThemeTokens';
import { TonalPalette, TonalPaletteDefault } from './TonalPalette';

export type ThemeScheme = {
  tones: TonalPalette;
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
  dark: DarkTokensDefault
}
