import { ChipProps } from '@mui/material/Chip/Chip';
import { styled } from '@mui/material/styles';
import {
  alpha,
  Chip as M2Chip,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

interface M3Chip {
  MuiChip: {
    defaultProps?: ComponentsProps['MuiChip'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiChip'];
    variants?: ComponentsVariants['MuiChip'];
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    input: true;
    assist: true;
    filter: true;
    suggestion: true;
  }
}

interface M3ChipProps extends ChipProps {
  selected?: boolean;
  elevated?: boolean;
}

export const Chip = styled(M2Chip)<M3ChipProps>(({ theme }) => {
  const { palette, elevation, shape } = theme;
  return {
    variants: [
      {
        props: ({ variant, selected }: M3ChipProps) =>
          (variant === undefined || variant === 'input') && !selected,
        style: {
          border: `1px solid ${palette.outlineVariant.main}`,
          color: palette.onSurfaceVariant.main,
          backgroundColor: palette.surface.main,
          '& .MuiChip-deleteIcon': {
            color: palette.onSurfaceVariant.main,
          },
          '& .MuiChip-icon': {
            color: palette.primary.main,
          },
        },
      },
      {
        props: ({ variant, selected, avatar }: M3ChipProps) =>
          (variant === undefined || variant === 'input') &&
          !selected &&
          avatar !== undefined,
        style: {
          borderRadius: shape.corner.extraLarge.all,
          '& .MuiChip-avatar': {
            backgroundColor: palette.onSurfaceVariant.main,
            color: palette.onPrimary.main,
          },
        },
      },
      {
        props: ({ variant, selected, onClick }: M3ChipProps) =>
          (variant === undefined || variant === 'input') &&
          !selected &&
          onClick !== undefined,
        style: {
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&.Mui-dragged': {
            backgroundColor: getStateLayerColor(
              StateLayer.Drag,
              palette.surface.main,
              palette.onSurface.main
            ),
            boxShadow: elevation.level3,
          },
        },
      },
      {
        props: ({ variant, selected }: M3ChipProps) =>
          (variant === undefined || variant === 'input') && selected,
        style: {
          color: palette.onSecondaryContainer.main,
          backgroundColor: palette.secondaryContainer.main,
          '& .MuiChip-deleteIcon': {
            color: palette.onSecondaryContainer.main,
          },
          '& .MuiChip-icon': {
            color: palette.primary.main,
          },
        },
      },
      {
        props: ({ variant, selected, avatar }: M3ChipProps) =>
          (variant === undefined || variant === 'input') &&
          selected &&
          avatar !== undefined,
        style: {
          borderRadius: shape.corner.extraLarge.all,
          '& .MuiChip-avatar': {
            backgroundColor: palette.onSecondaryContainer.main,
            color: palette.onSecondary.main,
          },
        },
      },
      {
        props: ({ variant, selected, onClick }: M3ChipProps) =>
          (variant === undefined || variant === 'input') &&
          selected &&
          onClick !== undefined,
        style: {
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main
            ),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main
            ),
          },
          '&.Mui-dragged': {
            backgroundColor: getStateLayerColor(
              StateLayer.Drag,
              palette.secondaryContainer.main,
              palette.onSecondaryContainer.main
            ),
            boxShadow: elevation.level3,
          },
        },
      },
      {
        props: ({ variant }: M3ChipProps) => variant === 'assist',
        style: {
          border: `1px solid ${palette.outlineVariant.main}`,
          color: palette.onSurface.main,
          backgroundColor: palette.surface.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:active': {
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surface.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&.Mui-dragged': {
            backgroundColor: getStateLayerColor(
              StateLayer.Drag,
              palette.surface.main,
              palette.onSurface.main
            ),
            boxShadow: elevation.level3,
          },
          '&.Mui-disabled': {
            opacity: 1,
            border: `1px solid ${alpha(palette.onSurface.main, 0.1)}`,
            backgroundColor: palette.surface.main,
            color: alpha(palette.onSurface.main, 0.38),
          },
          '& .MuiChip-icon': {
            color: palette.primary.main,
          },
          '& .MuiChip-avatar': {
            backgroundColor: palette.onSurface.main,
            color: palette.onSecondary.main,
          },
        },
      },
      {
        props: ({ variant, elevated }: M3ChipProps) =>
          variant === 'assist' && elevated,
        style: {
          boxShadow: elevation.level1,
          border: 0,
          color: palette.onSurface.main,
          backgroundColor: palette.surfaceContainerLow.main,
          '&:hover': {
            backgroundColor: getStateLayerColor(
              StateLayer.Hover,
              palette.surfaceContainerLow.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:focus': {
            backgroundColor: getStateLayerColor(
              StateLayer.Focus,
              palette.surfaceContainerLow.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&:active': {
            boxShadow: elevation.level2,
            backgroundColor: getStateLayerColor(
              StateLayer.Press,
              palette.surfaceContainerLow.main,
              palette.onSurfaceVariant.main
            ),
          },
          '&.Mui-dragged': {
            backgroundColor: getStateLayerColor(
              StateLayer.Drag,
              palette.surfaceContainerLow.main,
              palette.onSurfaceVariant.main
            ),
            boxShadow: elevation.level2,
          },
          '&.Mui-disabled': {
            opacity: 1,
            border: 0,
            boxShadow: elevation.level0,
            backgroundColor: alpha(palette.onSurfaceVariant.main, 0.1),
            color: alpha(palette.onSurface.main, 0.38),
          }
        },
      },
    ],
  };
});

export const getChip = (theme: Theme): M3Chip => {
  const { shape } = theme;
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: shape.corner.small.all,
        }
      },
      defaultProps: {
        variant: "input"
      },
    }
  }
}
