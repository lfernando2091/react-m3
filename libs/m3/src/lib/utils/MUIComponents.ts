import { Theme } from '@mui/material';
import { getCssBaseline, getButton, getToggleButtonGroup, getFab, getSwitch } from '../components';

type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme): M3Components => {
  return {
    components: {
      ...getCssBaseline(theme),
      ...getButton(theme),
      ...getToggleButtonGroup(theme),
      ...getFab(theme),
      ...getSwitch(theme),
    }
  } as M3Components
}
