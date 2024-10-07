import { AppBar, Toolbar, Tooltip, Typography, useScrollTrigger } from '@mui/material';
import { IconButton } from '@react-m3/m3';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import Grid from '@mui/material/Grid2';
import { useAppContext } from '../@core/AppContext';
import ColorIcon from '@mui/icons-material/Shuffle';

const DIGITS = '0123456789ABCDEF';

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

  const randomColor = (): string => {
    let result = '';
    for (let i = 0; i < 6; ++i) {
      const index = Math.floor(16 * Math.random());
      result += DIGITS[index];
    }
    return '#' + result;
  };

  // const onGenerate = () => generateScheme(randomColor());

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
          <Grid>
            {/*<Tooltip title='Shuffle Color'>*/}
            {/*  <IconButton size='large' color='inherit' onClick={onGenerate}>*/}
            {/*    <ColorIcon />*/}
            {/*  </IconButton>*/}
            {/*</Tooltip>*/}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
