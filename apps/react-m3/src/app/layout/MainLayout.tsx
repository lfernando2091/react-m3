import { Outlet } from 'react-router-dom';
import { Box, SxProps, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { MainAppBar } from './MainAppBar';
import { MainContainer } from './MainContainer';
import { MainDrawer } from './MainDrawer';

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (<Box sx={rootStyles}>
    <Box component="nav" sx={navStyles}>
    {/*  {isSmUp ? null : (*/}
    {/*    <MainDrawer*/}
    {/*      PaperProps={{ style: { width: drawerWidth } }}*/}
    {/*      variant="temporary"*/}
    {/*      open={mobileOpen}*/}
    {/*      onClose={handleDrawerToggle}*/}
    {/*    />*/}
    {/*  )}*/}
      <MainDrawer variant="permanent"
                  PaperProps={{ style: { width: drawerWidth } }}
                  sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} />
    </Box>
    <Box sx={mainStyles}>
      <Box sx={containerStyles}>
        <MainAppBar onDrawerToggle={handleDrawerToggle} />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Box>
    </Box>
  </Box>)
}
