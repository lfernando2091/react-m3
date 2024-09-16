import { ThemeOptions } from '@mui/material';
import { ThemeScheme } from '../types/ThemeScheme';
import { ThemeMode } from '../types/ThemeMode';

export const getM3Palette = (themeMode: ThemeMode, themeScheme: ThemeScheme): ThemeOptions => {
  const scheme = themeScheme[themeMode];
  if (scheme === undefined) {
    throw new Error(`Theme not found ${themeMode}`)
  }
  return {
    palette: {
      themeMode,
      primary: {
        main: scheme.primary,
        contrastText: scheme.onPrimary
      },
      onPrimary: {
        main: scheme.onPrimary,
        contrastText: scheme.primary
      },
      primaryContainer: {
        main: scheme.primaryContainer,
        contrastText: scheme.onPrimaryContainer
      },
      onPrimaryContainer: {
        main: scheme.onPrimaryContainer,
        contrastText: scheme.primaryContainer
      },

      secondary: {
        main: scheme.secondary,
        contrastText: scheme.onSecondary
      },
      onSecondary: {
        main: scheme.onSecondary,
        contrastText: scheme.secondary
      },
      secondaryContainer: {
        main: scheme.secondaryContainer,
        contrastText: scheme.onSecondaryContainer
      },
      onSecondaryContainer: {
        main: scheme.onSecondaryContainer,
        contrastText: scheme.secondaryContainer
      },

      tertiary: {
        main: scheme.tertiary,
        contrastText: scheme.onTertiary
      },
      onTertiary: {
        main: scheme.onTertiary,
        contrastText: scheme.tertiary
      },
      tertiaryContainer: {
        main: scheme.tertiaryContainer,
        contrastText: scheme.onTertiaryContainer
      },
      onTertiaryContainer: {
        main: scheme.onTertiaryContainer,
        contrastText: scheme.tertiaryContainer
      },

      error: {
        main: scheme.error,
        contrastText: scheme.onError
      },
      onError: {
        main: scheme.onError,
        contrastText: scheme.error
      },
      errorContainer: {
        main: scheme.errorContainer,
        contrastText: scheme.onErrorContainer
      },
      onErrorContainer: {
        main: scheme.onErrorContainer,
        contrastText: scheme.errorContainer
      },

      primaryFixed: {
        main: scheme.primaryFixed,
      },
      primaryFixedDim: {
        main: scheme.primaryFixedDim,
      },
      onPrimaryFixed: {
        main: scheme.onPrimaryFixed,
      },
      onPrimaryFixedVariant: {
        main: scheme.onPrimaryFixedVariant,
      },

      secondaryFixed: {
        main: scheme.secondaryFixed,
      },
      secondaryFixedDim: {
        main: scheme.secondaryFixedDim,
      },
      onSecondaryFixed: {
        main: scheme.onSecondaryFixed,
      },
      onSecondaryFixedVariant: {
        main: scheme.onSecondaryFixedVariant,
      },

      tertiaryFixed: {
        main: scheme.tertiaryFixed,
      },
      tertiaryFixedDim: {
        main: scheme.tertiaryFixedDim,
      },
      onTertiaryFixed: {
        main: scheme.onTertiaryFixed,
      },
      onTertiaryFixedVariant: {
        main: scheme.onTertiaryFixedVariant,
      },

      surface: {
        main: scheme.surface,
        contrastText: scheme.onSurface
      },
      onSurface: {
        main: scheme.onSurface,
        contrastText: scheme.surface
      },

      surfaceDim: {
        main: scheme.surfaceDim,
      },
      surfaceBright: {
        main: scheme.surfaceBright,
      },

      surfaceContainerLowest: {
        main: scheme.surfaceContainerLowest,
      },
      surfaceContainerLow: {
        main: scheme.surfaceContainerLow,
      },
      surfaceContainer: {
        main: scheme.surfaceContainer,
      },
      surfaceContainerHigh: {
        main: scheme.surfaceContainerHigh,
      },
      surfaceContainerHighest: {
        main: scheme.surfaceContainerHighest,
      },

      surfaceVariant: {
        main: scheme.surfaceVariant,
        contrastText: scheme.onSurfaceVariant
      },
      onSurfaceVariant: {
        main: scheme.onSurfaceVariant,
        contrastText: scheme.surfaceVariant
      },

      outline: {
        main: scheme.outline,
      },
      outlineVariant: {
        main: scheme.outlineVariant,
      },

      inversePrimary: {
        main: scheme.inversePrimary,
        contrastText: scheme.inverseOnPrimary
      },
      inverseOnPrimary: {
        main: scheme.inverseOnPrimary,
        contrastText: scheme.inversePrimary
      },
      inverseSurface: {
        main: scheme.inverseSurface,
        contrastText: scheme.inverseSurface
      },
      inverseOnSurface: {
        main: scheme.inverseOnSurface,
        contrastText: scheme.inverseSurface
      },

      shadow: {
        main: scheme.shadow,
      },
      scrim: {
        main: scheme.scrim,
      },

      surfaceTintColor: {
        main: scheme.surfaceTintColor,
      },

      /**/
      background: {
        default: scheme.surfaceContainer,
        paper: scheme.surface
      },
      onBackground: {
        main: scheme.onSurface,
      },
      common: {
        white: scheme.background,
        black: scheme.onBackground
      },
      text: {
        primary: scheme.onSurface,
        secondary: scheme.onSecondaryContainer,
      },

      info: {
        main: scheme.info,
        contrastText: scheme.onInfo
      },
      onInfo: {
        main: scheme.onInfo,
        contrastText: scheme.info
      },
      infoContainer: {
        main: scheme.infoContainer,
        contrastText: scheme.onInfoContainer
      },
      onInfoContainer: {
        main: scheme.onInfoContainer,
        contrastText: scheme.infoContainer
      },

      success: {
        main: scheme.success,
        contrastText: scheme.onSuccess
      },
      onSuccess: {
        main: scheme.onSuccess,
        contrastText: scheme.success
      },
      successContainer: {
        main: scheme.successContainer,
        contrastText: scheme.onSuccessContainer
      },
      onSuccessContainer: {
        main: scheme.onSuccessContainer,
        contrastText: scheme.successContainer
      },

      warning: {
        main: scheme.warning,
        contrastText: scheme.onWarning
      },
      onWarning: {
        main: scheme.onWarning,
        contrastText: scheme.warning
      },
      warningContainer: {
        main: scheme.warningContainer,
        contrastText: scheme.onWarningContainer
      },
      onWarningContainer: {
        main: scheme.onWarningContainer,
        contrastText: scheme.warningContainer
      },
      divider: scheme.outline
    },
    tones: themeScheme.tones,
    motion: themeScheme.motion,
    elevation: themeScheme.elevation,
  }
}
