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
  getAlert,
  getTextField,
  getRadio,
  getFormControlLabel,
  getFormControl,
  getCheckbox,
  getPaper,
  getTabs,
  getDialog,
  getDivider
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
      ...getRadio(theme),
      ...getFormControlLabel(theme),
      ...getFormControl(theme),
      ...getCheckbox(theme),
      ...getPaper(theme),
      ...getTabs(theme),
      ...getDialog(theme),
      ...getDivider(theme),
    }
  } as M3Components
}
