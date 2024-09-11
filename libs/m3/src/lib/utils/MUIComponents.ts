import { Theme } from '@mui/material';
import { getCssBaseline, getButton } from '../components';
import { getToggleButtonGroup } from '../components/ToggleButtonGroup';

type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme): M3Components => {
  return {
    components: {
      ...getCssBaseline(theme),
      ...getButton(theme),
      ...getToggleButtonGroup(theme),
    }
  } as M3Components
}
