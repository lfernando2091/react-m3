import { Box, Drawer, DrawerProps, List, Toolbar, Typography } from '@mui/material';


export const MainDrawer = (props: DrawerProps) => {
  const { onClose, ...others } = props;

  return (
    <Drawer {...others} onClose={onClose}>
      <Toolbar>
        <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
          Material You
        </Typography>
      </Toolbar>
      <List>
        <Box>
        </Box>
      </List>
    </Drawer>
  )
}
