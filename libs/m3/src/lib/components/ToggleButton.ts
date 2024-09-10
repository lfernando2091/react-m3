import {
  Theme,
  ComponentsProps, ComponentsOverrides, ComponentsVariants,
  ToggleButtonProps as M2ToggleButtonProps, ToggleButton as M2ToggleButton, alpha
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface ToggleButtonProps extends M2ToggleButtonProps{
  variant?: 'standard' | 'filled' | 'tonal' | 'outlined';
}

export const ToggleButton = styled(M2ToggleButton)<ToggleButtonProps>(({ theme, selected }) => {
  const { palette } = theme;
  return {
    borderRadius: '50px',
    textTransform: 'none',
    variants: [
      {
        props: ({ variant, selected }: ToggleButtonProps) => (variant === undefined || variant === 'standard') && !selected,
        style: {
          backgroundColor: 'transparent',
          color: palette.onSurfaceVariant.main,
          boxShadow: theme.shadows[0],
          border: 'none',
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            border: 'none',
          },
          '&:hover': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Hover),
          },
          '&:focus': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Focus),
          },
          '&:active': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Press),
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => (variant === undefined || variant === 'standard') && selected,
        style: {
          boxShadow: theme.shadows[0],
          border: 'none',
          "&.Mui-selected": {
            color: palette.primary.main,
            backgroundColor: 'transparent',
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            border: 'none',
          },
          '&.Mui-selected:hover': {
            backgroundColor: alpha(palette.primary.main, StateLayer.Hover),
          },
          '&:focus': {
            backgroundColor: alpha(palette.primary.main, StateLayer.Focus),
          },
          '&:active': {
            backgroundColor: alpha(palette.primary.main, StateLayer.Press),
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'filled' && !selected,
        style: {
          backgroundColor: palette.surfaceContainerHighest.main,
          color: palette.primary.main,
          boxShadow: theme.shadows[0],
          border: 'none',
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            border: 'none',
          },
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.primary.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHighest.main, palette.primary.main)
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.primary.main)
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'filled' && selected,
        style: {
          boxShadow: theme.shadows[0],
          border: 'none',
          "&.Mui-selected": {
            backgroundColor: palette.primary.main,
            color: palette.onPrimary.main,
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            border: 'none',
          },
          '&.Mui-selected:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.primary.main, palette.onPrimary.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.primary.main, palette.onPrimary.main),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.primary.main, palette.onPrimary.main)
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'tonal' && !selected,
        style: {
          backgroundColor: palette.surfaceContainerHighest.main,
          color: palette.onSurfaceVariant.main,
          boxShadow: theme.shadows[0],
          border: 'none',
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            border: 'none',
          },
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.surfaceContainerHighest.main, palette.onSurfaceVariant.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.surfaceContainerHighest.main, palette.onSurfaceVariant.main)
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.surfaceContainerHighest.main, palette.onSurfaceVariant.main)
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'tonal' && selected,
        style: {
          boxShadow: theme.shadows[0],
          border: 'none',
          "&.Mui-selected": {
            backgroundColor: palette.secondaryContainer.main,
            color: palette.onSecondaryContainer.main,
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            border: 'none',
          },
          '&.Mui-selected:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'outlined' && !selected,
        style: {
          backgroundColor: 'transparent',
          color: palette.onSurfaceVariant.main,
          boxShadow: theme.shadows[0],
          borderColor: palette.outline.main,
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: alpha(palette.onSurface.main, 0.38),
            borderColor: alpha(palette.onSurface.main, 0.12)
          },
          '&:hover': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Hover),
          },
          '&:focus': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Focus),
          },
          '&:active': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Press),
          },
        }
      },
      {
        props: ({ variant, selected }: ToggleButtonProps) => variant === 'outlined' && selected,
        style: {
          boxShadow: theme.shadows[0],
          border: 'none',
          "&.Mui-selected": {
            backgroundColor: palette.inverseSurface.main,
            color: palette.inverseOnSurface.main,
          },
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            border: 'none',
          },
          '&.Mui-selected:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.inverseSurface.main, palette.inverseOnSurface.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.inverseSurface.main, palette.inverseOnSurface.main),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.inverseSurface.main, palette.inverseOnSurface.main)
          },
        }
      },
    ]
  }
});

interface M3ToggleButton {
  MuiToggleButton: {
    defaultProps?: ComponentsProps['MuiToggleButton'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButton'];
    variants?: ComponentsVariants['MuiToggleButton'];
  }
}

export const getToggleButton = (theme: Theme): M3ToggleButton => {
  const { palette } = theme;
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          color: palette.onSurface.main,
          "&.Mui-selected": {
            color: palette.onSecondaryContainer.main,
            backgroundColor: palette.secondaryContainer.main,
          },
          '&.MuiToggleButton-primary': {
            borderColor: 'transparent'
          },
          '&.MuiToggleButton-primary.Mui-selected': {
            color: palette.onPrimary.main,
            backgroundColor: palette.primary.main
          },
        },
      },
    }

  };
}
