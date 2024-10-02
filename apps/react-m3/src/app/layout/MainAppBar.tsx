import { AppBar, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { IconButton } from '@react-m3/m3';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import Grid from '@mui/material/Grid2';
import { useAppContext } from '../@core/AppContext';

export type MainAppBarProps = {
  window?: () => Window;
}

export const MainAppBar = ({ window }: MainAppBarProps) => {
  const { switchDrawer } = useAppContext();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return (
    <AppBar color="primary" position="sticky" className={trigger ? 'Mui-scroll': ''}>
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid sx={{ display: { md: 'none', sm: 'block' } }}>
            <IconButton color="inherit" edge="start" onClick={() => switchDrawer()}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
              Home
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
