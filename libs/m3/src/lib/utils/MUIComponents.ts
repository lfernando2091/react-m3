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
  getDivider,
  getSnackbar,
  getMenu,
  getNavigationRail,
  getTable,
} from '../components';
import { getTypographyBaseLine } from '../components/Typography';

type M3Components = {
  typography: Theme['typography'],
  components: Theme['components']
};

export const getMUIComponents = (theme: Theme): M3Components => {
  return {
    typography: {
      ...getTypographyBaseLine()
    },
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
      ...getSnackbar(theme),
      ...getMenu(theme),
      ...getNavigationRail(theme),
      ...getTable(theme),
    }
  } as M3Components
}
