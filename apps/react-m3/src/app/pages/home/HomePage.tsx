import { BaseColorView } from './sections/BaseColorSection';
import { useAppContext } from '../../@core/AppContext';
import { Card, CardContent, FormControlLabel, Switch, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

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
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
      Supported components
    </Typography >
    <Grid container spacing={2}>
      <Grid size={4}>
        <Card variant="outlined" className="Mui-clickable">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Buttons
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={4}>
        <Card variant="outlined" className="Mui-clickable">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Switch
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>)
}
