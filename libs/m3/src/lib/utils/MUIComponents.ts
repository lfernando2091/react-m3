import { Theme } from '@mui/material';
import { getCssBaseline, getButton } from '../components';

type M3Components = { components: Theme['components'] };

export const getMUIComponents = (theme: Theme): M3Components => {
  return {
    components: {
      ...getCssBaseline(theme),
      ...getButton(theme)
    }
  } as M3Components
}
