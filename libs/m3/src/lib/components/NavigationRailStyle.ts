import {
  Components, ComponentNameToClassKey,
  ComponentsOverrides, ComponentsPropsList,
  ComponentsVariants,
  Theme as MuiTheme
} from '@mui/material/styles';
import { NavigationRailProps } from './NavigationRail';

type Theme = Omit<MuiTheme, 'components'>;

declare module '@mui/material/styles' {
  export interface NavigationRailClasses {
    root: string;
    bottomContent: string;
    mainContent: string;
    menu: string;
    navigation: string;
  }
  type MenuClassKey = keyof NavigationRailClasses;

  interface ComponentNameToClassKey {
    MuiNavigationRail: MenuClassKey;
  }

  interface ComponentsPropsList {
    MuiNavigationRail: Partial<NavigationRailProps>;
  }

  interface Components {
    MuiNavigationRail?: {
      defaultProps?: ComponentsPropsList['MuiNavigationRail'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiNavigationRail'];
      variants?: ComponentsVariants['MuiNavigationRail'];
    };
  }
}

interface M3NavigationRail {
  MuiNavigationRail: {
    defaultProps?: ComponentsPropsList['MuiNavigationRail'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiNavigationRail'];
    variants?: ComponentsVariants['MuiNavigationRail'];
  }
}

export const getNavigationRail = (_theme: Theme): M3NavigationRail => {
  return {
    MuiNavigationRail: {
      defaultProps: {
        alignment: 'top',
        actionButton: true
      }
    }
  }
}
