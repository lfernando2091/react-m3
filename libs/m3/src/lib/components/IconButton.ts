import { styled } from '@mui/material/styles';
import { alpha, IconButton as M2IconButton } from '@mui/material';
import { IconButtonProps as M2IconButtonProps } from '@mui/material/IconButton/IconButton';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface IconButtonProps extends M2IconButtonProps {
  variant?: 'standard' | 'filled' | 'tonal' | 'outlined';
}

export const IconButton = styled(M2IconButton)<IconButtonProps>(({ theme }) => {
  const { palette, elevation } = theme;
  return {
    variants: [
      {
        props: ({ variant }: IconButtonProps) => variant === undefined || variant === 'standard',
        style: {
          backgroundColor: 'transparent',
          color: palette.onSurfaceVariant.main,
          boxShadow: elevation.level0,
          '&.Mui-disabled': {
            color: alpha(palette.onSurface.main, 0.38),
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
        props: { variant: 'filled' },
        style: {
          backgroundColor: palette.primary.main,
          color: palette.onPrimary.main,
          boxShadow: elevation.level0,
          '&.Mui-disabled': {
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.primary.main, palette.onPrimary.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.primary.main, palette.onPrimary.main),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.primary.main, palette.onPrimary.main),
          }
        }
      },
      {
        props: { variant: 'tonal' },
        style: {
          backgroundColor: palette.secondaryContainer.main,
          color: palette.onSecondaryContainer.main,
          boxShadow: elevation.level0,
          '&.Mui-disabled': {
            backgroundColor: alpha(palette.onSurface.main, 0.12),
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&:hover': {
            backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
          }
        }
      },
      {
        props: { variant: 'outlined' },
        style: {
          backgroundColor: 'transparent',
          color: palette.onSurfaceVariant.main,
          borderColor: palette.outline.main,
          borderWidth: '1px',
          boxShadow: elevation.level0,
          borderStyle: 'solid',
          '&.Mui-disabled': {
            borderColor: alpha(palette.onSurface.main, 0.12),
            color: alpha(palette.onSurface.main, 0.38),
          },
          '&:hover': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Hover),
          },
          '&:focus': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Focus),
          },
          '&:active': {
            backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Press),
          }
        }
      },
    ]
  }
});
