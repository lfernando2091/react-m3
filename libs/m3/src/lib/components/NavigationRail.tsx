import { styled } from '@mui/material/styles';
import { forwardRef, ReactNode } from 'react';
import { Fab, useThemeProps } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from './IconButton';

const COMPONENT_NAME = "MuiNavigationRail";
type Alignment = 'top' | 'middle' | 'bottom';

export interface NavigationRailProps {
  alignment?: Alignment;

  menuIcon?: boolean;
  menuIconOnClick?: () => void;

  actionButton?: boolean;
  actionButtonIcon?: ReactNode;
  actionButtonOnClick?: () => void;

  bottomContent?: ReactNode;
  children: ReactNode;
}

interface NavigationRailOwnerState extends NavigationRailProps{
  marginBottom?: boolean;
}

interface OwnerStateProps {
  ownerState: NavigationRailOwnerState
}

const NavigationRailRoot = styled('div', {
  name: COMPONENT_NAME,
  slot: 'root',
})<OwnerStateProps>(({ theme }) => {
  const  { palette } = theme;
  return {
    zIndex: 1101,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '88px',
    height: '100%',
    backgroundColor: palette.surface.main,
    overflowY: 'auto'
  };
});

const NavigationRailBottomContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'bottomContent',
})<OwnerStateProps>(() => ({
  marginBottom: '20px',
}));

const NavigationRailMainContent = styled('div', {
  name: COMPONENT_NAME,
  slot: 'mainContent',
})<OwnerStateProps>(({ theme, ownerState }) => {
  const  { palette } = theme;
  return {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: '20px',
    marginBottom: ownerState.marginBottom ? '20px': '0px',
    variants: [
      {
        props: {
          alignment: 'middle',
        },
        style: {
          justifyContent: 'space-between'
        },
      },
      {
        props: {
          alignment: 'bottom',
        },
        style: {
          justifyContent: 'space-between',
        },
      }
    ]
  };
});

const NavigationRailMenu = styled('div', {
  name: COMPONENT_NAME,
  slot: 'menu',
})<OwnerStateProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24px',
  '& .MuiFab-root': {
    boxShadow: theme.elevation.level0
  }
}));

const NavigationRailNavigation = styled('div', {
  name: COMPONENT_NAME,
  slot: 'navigation',
})<OwnerStateProps>(() => ({ }));

const alignmentName = (alignment?: Alignment) => {
  switch (alignment) {
    case "top": return "Top";
    case "middle": return "Middle";
    case "bottom": return "Bottom";
    default: return "";
  }
}

export const NavigationRail = forwardRef<HTMLDivElement, NavigationRailProps>(
  function NavigationRail(inProps, ref) {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const { alignment,
      bottomContent,
      menuIcon,
      actionButton,
      actionButtonIcon,
      actionButtonOnClick,
      menuIconOnClick,
      children, ...other } = props;

    const ownerState: NavigationRailOwnerState = {
      ...props,
      alignment,
      marginBottom: undefined === bottomContent
    };

    return (
      <NavigationRailRoot
        className={`${COMPONENT_NAME}-root`}
        ref={ref}
        ownerState={ownerState}
        {...other}
      >
        <NavigationRailMainContent
          className={`${COMPONENT_NAME}MainContent-root`}
          ownerState={ownerState}
        >
          {(menuIcon || (actionButton && actionButtonIcon)) && (
            <NavigationRailMenu
              className={`${COMPONENT_NAME}Menu-root ${COMPONENT_NAME}Top-root`}
              ownerState={ownerState}>
              {menuIcon && (
                <IconButton sx={{ mb: '10px' }} onClick={(_e) => {
                  if (menuIconOnClick) {
                    menuIconOnClick();
                  }
                }}>
                  <MenuIcon />
                </IconButton>
              )}
              {(actionButton && actionButtonIcon) && (
                <Fab color="primary" onClick={(_e) => {
                  if (actionButtonOnClick) {
                    actionButtonOnClick();
                  }
                }}>
                  { actionButtonIcon }
                </Fab>
              )}
            </NavigationRailMenu>
          )}
          {(!menuIcon && !actionButton && alignment === 'middle') && <div className={`${COMPONENT_NAME}Top-root`}></div>}
          {!menuIcon && !actionButton && alignment === 'bottom' && <div className={`${COMPONENT_NAME}Top-root`}></div>}
          <NavigationRailNavigation
            ownerState={ownerState}
            className={`${COMPONENT_NAME}Navigation-root ${COMPONENT_NAME}Navigation${alignmentName(alignment)}-root`}>
            { children }
          </NavigationRailNavigation>
          {alignment === 'middle' && <div className={`${COMPONENT_NAME}Bottom-root`}></div>}
        </NavigationRailMainContent>
        {bottomContent && (
          <NavigationRailBottomContent
            className={`${COMPONENT_NAME}BottomContent-root`}
            ownerState={ownerState}
          >
            {bottomContent}
          </NavigationRailBottomContent>
        )}
      </NavigationRailRoot>
    );
  }
);
