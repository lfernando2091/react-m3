import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import { useThemeProps } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../../utils/StateLayerColor';

const COMPONENT_NAME = "MuiRipple";

export interface RippleProps {
  hovered?: boolean;
  pressed?: boolean;
}

interface RippleOwnerState extends RippleProps {
  /* empty */
}

interface OwnerStateProps {
  ownerState: RippleOwnerState
}

const RippleRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    display: 'flex',
    margin: 'auto',
    pointerEvents: 'none',
    [`&, .${COMPONENT_NAME}-surface`]: {
      borderRadius: 'inherit',
      position: 'absolute',
      inset: 0,
      overflowY: 'hidden',
    },
  };
});

const RippleSurface = styled('div', {
  name: COMPONENT_NAME,
  slot: 'surface',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, motion } = theme;
  return {
    pointerEvents: 'none',
    '&::before, &::after': {
      content: '""',
      opacity: 0,
      position: 'absolute',
    },
    '&::before': {
      backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
      inset: 0,
      transition: theme.transitions.create(
        ['opacity', 'background-color'],
        {
          duration: motion.duration.short1,
          easing: motion.easing.linear
        },
      ),
    },
    '&::after': {
      background: `radial-gradient(closest-side, ${getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main)} max(100% - 70px, 65%), transparent 100%)`,
      transformOrigin: 'center center',
      transition: theme.transitions.create(
        ['opacity'],
        {
          duration: motion.duration.medium3,
          easing: motion.easing.linear
        },
      ),
    },
    variants: [
      {
        props: { hovered: true },
        style: {
          '&::before': {
            backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main),
            opacity: StateLayer.Hover,
          }
        },
      },
      {
        props: { pressed: true },
        style: {
          '&::after': {
            opacity: StateLayer.Press,
            transitionDuration: motion.duration.short2,
          },
        },
      },
    ]
  }
});


export const M3Ripple = forwardRef<HTMLDivElement, RippleProps>(
  function Ripple(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

    const { hovered = false,
      pressed = false,
      ...other } = props;


    const ownerState: RippleOwnerState = {
      hovered,
      pressed,
      ...props
    }

    return (<RippleRoot ref={ref}
                        ownerState={ownerState}
                        {...other}>
      <RippleSurface ownerState={ownerState}
                     className={`${COMPONENT_NAME}-surface`}/>
    </RippleRoot>)
  }
);

