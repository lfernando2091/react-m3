import { styled } from '@mui/material/styles';
import { forwardRef, ReactNode, ElementType } from 'react';
import { alpha, useThemeProps } from '@mui/material';
import { getStateLayerColor, StateLayer } from '../utils/StateLayerColor';

const COMPONENT_NAME = "MuiNavItem";

export interface NavItemProps {
  component?: ElementType;
  children: ReactNode;
  label?: string;
  href?: string;
  to?: string;
  selected?: boolean;
}

interface NavItemOwnerState extends NavItemProps {
 myProp?: string;
}

interface OwnerStateProps {
  ownerState: NavItemOwnerState
}

const NavItemButtonRoot = styled('button', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    display: 'flex'
  };
});

const NavItemRoot = styled('a', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    textDecoration: 'none',
    display: 'block',
    width: '80px',
    margin: '-2px auto 14px',
    padding: '2px',
    color: palette.onSurfaceVariant.main,
    fontVariationSettings: '"GRAD" 0, "opsz" 17',
    '&:hover': {
      [`& .${COMPONENT_NAME}-icon`]: {
        backgroundColor: alpha(palette.onSurface.main, StateLayer.Hover),
        '&.Mui-selected': {
          backgroundColor: getStateLayerColor(StateLayer.Hover, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
        }
      },
      [`& .${COMPONENT_NAME}-label`]: {
        fontVariationSettings: '"GRAD" 50',
      }
    },
    '&:focus': {
      [`& .${COMPONENT_NAME}-icon`]: {
        backgroundColor: alpha(palette.onSurface.main, StateLayer.Focus),
        '&.Mui-selected': {
          backgroundColor: getStateLayerColor(StateLayer.Focus, palette.secondaryContainer.main, palette.onSecondaryContainer.main)
        }
      },
    }
  };
});

const NavItemLabel = styled('div', {
  name: COMPONENT_NAME,
  slot: 'label',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    ...theme.typography.button,
    textTransform: 'none',
    marginBottom: '4px',
    textAlign: 'center',
    color: palette.onSurfaceVariant.main,
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
  const  { palette, shape } = theme;
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
      children,
      ...other } = props;

    const ownerState: NavItemOwnerState = {
      ...props
    }

    const finalComponent = component === 'a' && (!other.href && !other.to) ? 'button': component;

    return (
      <NavItemRoot ref={ref}
                   as={finalComponent}
                   className={`${COMPONENT_NAME}-root${selected ? ' Mui-selected': ''}`}
                   ownerState={ownerState}
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

export const NavButtonItem = forwardRef<HTMLButtonElement, NavItemProps>(
  function NavItem(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const { ...other } = props;
    const ownerState: NavItemOwnerState = {
      ...props,
    }

    return (
      <NavItemButtonRoot ref={ref}
                   ownerState={ownerState}
                   {...other}>
      </NavItemButtonRoot>
    )
  }
);
