import { Outlet } from 'react-router-dom';
import { Box, SxProps, useMediaQuery, useTheme } from '@mui/material';
import { MainAppBar } from './MainAppBar';
import { MainContainer } from './MainContainer';
import { MainDrawer } from './MainDrawer';
import { useAppContext } from '../@core/AppContext';

const drawerWidth = 360;

const rootStyles: SxProps = {
  display: 'flex',
  minHeight: '100vh',
};
const navStyles: SxProps = {
  width: { md: drawerWidth },
  flexShrink: { md: 0 },
};

const mainStyles: SxProps = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};
const containerStyles: SxProps = {
  p: 0,
  flex: 1,
};

export const MainLayout = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('md'));
  const { openDrawer, switchDrawer } = useAppContext();

  const handleDrawerToggle = () => {
    switchDrawer();
  };

  return (<Box sx={rootStyles}>
    <Box component="nav" sx={navStyles}>
      {!isSmUp && <MainDrawer
        PaperProps={{ style: { width: drawerWidth } }}
        variant="temporary"
        open={openDrawer}
        onClose={handleDrawerToggle}
      />}
      <MainDrawer variant="permanent"
                  PaperProps={{ style: { width: drawerWidth } }}
                  sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} />
    </Box>
    <Box sx={mainStyles}>
      <Box sx={containerStyles}>
        <MainAppBar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Box>
    </Box>
  </Box>)
}
