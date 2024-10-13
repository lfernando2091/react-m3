import { Theme } from '@mui/material';
import {
  getCssBaseline,
  getButton,
  getToggleButtonGroup,
  getFab,
  getSwitch,
  getCard,
  getBadge,
  getDrawer,
  getAppBar,
  getListItem,
  getListItemIcon,
  getListItemButton,
  getListSubheader,
  getAccordion,
  getTypography,
  getAlert, getTextField
} from '../components';

type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme): M3Components => {
  return {
    components: {
      ...getCssBaseline(theme),
      ...getButton(theme),
      ...getToggleButtonGroup(theme),
      ...getFab(theme),
      ...getSwitch(theme),
      ...getCard(theme),
      ...getBadge(theme),
      ...getDrawer(theme),
      ...getAppBar(theme),
      ...getListItem(theme),
      ...getListItemIcon(theme),
      ...getListItemButton(theme),
      ...getListSubheader(theme),
      ...getAccordion(theme),
      ...getTypography(theme),
      ...getAlert(theme),
      ...getTextField(theme),
    }
  } as M3Components
}
