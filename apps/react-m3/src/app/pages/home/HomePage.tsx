import { BaseColorView } from './sections/BaseColorSection';
import { useAppContext } from '../../@core/AppContext';
import { FormControlLabel, Switch } from '@mui/material';

export const HomePage = () => {
  const { lightMode, switchThemeMode } = useAppContext();
  return (<>
    <BaseColorView/>
    <FormControlLabel
      control={
        <Switch
          checked={lightMode}
          onChange={() => { switchThemeMode() }}
          name="status"
        />
      }
      label={lightMode ? "Light mode" : "Dark mode"}
    />
  </>)
}
