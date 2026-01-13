import { styled } from '@mui/material/styles';
import { forwardRef, ReactNode, ElementType, MouseEvent } from 'react';
import { alpha, useThemeProps } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

const COMPONENT_NAME = "MuiNavItem";
const simpleMethod = (_event: MouseEvent<HTMLAnchorElement>) => { /* empty */  }

export interface NavItemProps {
  component?: ElementType;
  children: ReactNode;
  label?: string;
  href?: string;
  to?: string;
  selected?: boolean;
  onClick?: (event?: MouseEvent<HTMLAnchorElement>) => void;
}

interface NavItemOwnerState extends NavItemProps {
 buttonStyle?: boolean;
}

interface OwnerStateProps {
  ownerState: NavItemOwnerState
}

const radialGradient = (backgroundColor: string) => `radial-gradient(circle, transparent 1%, ${backgroundColor} 1%)`;

const NavItemRoot = styled('a', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, motion } = theme;
  return {
    textDecoration: 'none',
    display: 'block',
    width: '80px',
    margin: '-2px auto 14px',
    padding: '2px',
    color: palette.onSurfaceVariant.main,
    fontVariationSettings: '"GRAD" 0, "opsz" 17',

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
      [`& .${COMPONENT_NAME}-icon`]: {
        backgroundSize: '15000%',
        backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover),
        backgroundImage: radialGradient(alpha(palette.onSurface.main, StateLayer.Hover)),
        '&.Mui-selected': {
          backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
        }
      },
      [`& .${COMPONENT_NAME}-label`]: {
        fontVariationSettings: '"GRAD" 50',
        fontWeight: 'bold'
      }
    },
    '&:focus': {
      [`& .${COMPONENT_NAME}-icon`]: {
        backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus),
        '&.Mui-selected': {
          backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
        }
      },
    },
    '&:active': {
      [`& .${COMPONENT_NAME}-icon`]: {
        transition: theme.transitions.create(
          ['background-color', 'background-size'],
          {
            duration: 0,
            easing: motion.easing.linear
          },
        ),
        backgroundSize: '100%',
        backgroundColor: alpha(palette.onSurface.main, StateLayer.Press),
        '&.Mui-selected': {
          backgroundColor: getStateLayerColor(StateLayer.Press, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
        }
      },
    },
    '&:focus-visible': {
      margin: '-4px auto 12px',
      border: '2px solid',
      borderColor: palette.onSurface.main,
      borderRadius: '18px',
      outline: 0,
      boxShadow: `inset 0 0 0 2px ${palette.surface.main}`,
    },
    variants: [
      {
        props: {
          buttonStyle: true,
        },
        style: {
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: 'none',
        },
      },
    ]
  };
});

const NavItemLabel = styled('div', {
  name: COMPONENT_NAME,
  slot: 'label',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, motion } = theme;
  return {
    ...theme.typography.button,
    textTransform: 'none',
    marginBottom: '4px',
    textAlign: 'center',
    color: palette.onSurfaceVariant.main,
    pointerEvents: 'none',
    userSelect: 'none',
    transition: theme.transitions.create(
      ['font-weight'],
      {
        duration: motion.duration.short2,
        easing: motion.easing.emphasized.default
      },
    ),
    '&.Mui-selected': {
      color: palette.onSurface.main,
      fontWeight: 'bold'
    }
  };
});

const NavItemIcon = styled('span', {
  name: COMPONENT_NAME,
  slot: 'icon',
})<OwnerStateProps>(({ theme }) => {
  const  { palette, shape, motion } = theme;
  return {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '56px',
    height: '32px',
    marginRight: 'auto',
    marginBottom: '4px',
    marginLeft: 'auto',
    borderRadius: shape.corner.large.all,
    color: palette.onSurfaceVariant.main,
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    transition: theme.transitions.create(
      ['background-color', 'background-size'],
      {
        duration: motion.duration.long4,
        easing: motion.easing.emphasized.default
      },
    ),
    '&.Mui-selected': {
      color: palette.onSecondaryContainer.main,
      backgroundColor: palette.secondaryContainer.main,
    }
  };
});

export const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>(
  function NavItem(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const { label,
      selected = false,
      component = 'a',
      onClick = simpleMethod,
      children,
      ...other } = props;

    const finalComponent = component === 'a' && (!other.href && !other.to) ? 'button': component;

    const ownerState: NavItemOwnerState = {
      buttonStyle: finalComponent === 'button',
      component,
      ...props
    }

    return (
      <NavItemRoot ref={ref}
                   as={finalComponent}
                   className={`${COMPONENT_NAME}-root${selected ? ' Mui-selected': ''}`}
                   ownerState={ownerState}
                   onClick={onClick}
                   href={other.href || other.to}
                   {...other}>
        <NavItemIcon
          className={`${COMPONENT_NAME}-icon${selected ? ' Mui-selected': ''}`}
          ownerState={ownerState}>
          { children }
        </NavItemIcon>
        {label &&
          <NavItemLabel
            className={`${COMPONENT_NAME}-label${selected ? ' Mui-selected': ''}`}
            ownerState={ownerState}>
            { label }
          </NavItemLabel>
        }
      </NavItemRoot>
    )
  }
);
