import { forwardRef, MouseEvent, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { alpha, useThemeProps } from '@mui/material';
import { StateLayer } from '../../utils/StateLayerColor';

const COMPONENT_NAME = "MuiSwitchContainer";
const simpleMethod = (_event: MouseEvent<HTMLDivElement>) => { /* empty */  }

export interface SwitchContainerProps {
  secondaryComponent: ReactNode;
  children: ReactNode;
  on?: boolean;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

interface SwitchContainerOwnerState extends SwitchContainerProps {
  /* empty */
}

interface OwnerStateProps {
  ownerState: SwitchContainerOwnerState
}

const SwitchContainerRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, motion, shape } = theme;
  return {
    width: '48px',
    height: '48px',
    transition: theme.transitions.create(
      ['background-color'],
      {
        duration: motion.duration.medium2,
        easing: motion.easing.emphasized.default
      },
    ),
    border: '2px solid transparent',
    borderRadius: '32px',
    outline: '1px solid',
    outlineColor: palette.outline.main,
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',

    WebkitTapHighlightColor: 'transparent',
    MozAppearance: 'none', // Reset
    WebkitAppearance: 'none', // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none', // Remove Firefox dotted outline.
    },
    '@media print': {
      colorAdjust: 'exact',
    },

    '&:hover': {
      backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Hover),
    },
    '&:active': {
      backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Press),
    },
    '&:focus-visible': {
      margin: '0 -2px',
      border: '2px solid',
      borderColor: palette.onSurface.main,
      borderRadius: '24px',
      outline: '0',
      backgroundColor: alpha(palette.onSurfaceVariant.main, StateLayer.Focus),
      boxShadow: `inset 0 0 0 2px ${palette.surface.main}`,
    }
  };
});

const SwitchSlideRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'slide',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, motion } = theme;
  return {
    transition: theme.transitions.create(
      ['transform'],
      {
        duration: motion.duration.medium2,
        easing: motion.easing.emphasized.default
      },
    ),
    [`& .${COMPONENT_NAME}-b`]: {
      marginTop: '-2px'
    },
    variants: [
      {
        props: {
          on: true,
        },
        style: {
          transform: 'translateY(-48px)',
        },
      },
      {
        props: {
          on: false,
        },
        style: {
          transform: 'none',
        },
      }
    ]
  };
});

const SwitchItemRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'item',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '0px',
    marginLeft: '-2px',
    width: '48px',
    height: '48px',
    color: palette.onSurfaceVariant.main
  };
});

export const SwitchContainer = forwardRef<HTMLDivElement, SwitchContainerProps>(
  function SwitchContainer(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });

    const { secondaryComponent,
      children,
      on = true,
      onClick = simpleMethod,
      ...other } = props;

    const ownerState: SwitchContainerOwnerState = {
      on,
      ...props
    }

    return (<SwitchContainerRoot ref={ref}
                                 ownerState={ownerState}
                                 onClick={onClick}
                                 tabIndex={0}
                                 {...other}>
      <SwitchSlideRoot ownerState={ownerState}>
        <SwitchItemRoot ownerState={ownerState}
                        className={`${COMPONENT_NAME}-item ${COMPONENT_NAME}-b`}>
          { secondaryComponent }
        </SwitchItemRoot>
        <SwitchItemRoot ownerState={ownerState}
                        className={`${COMPONENT_NAME}-item ${COMPONENT_NAME}-a`}>
          { children }
        </SwitchItemRoot>
      </SwitchSlideRoot>
    </SwitchContainerRoot>)
  }
);
