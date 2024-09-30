import { Stack, Typography, AppBar, Toolbar, Tooltip, Badge, IconButton } from '@mui/material';
import NotificationIcon from '@mui/icons-material/NotificationsOutlined';
import MailIcon from '@mui/icons-material/MailOutline';
import BackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid2';

export const AppBarSection = () => {
  return (
    <>
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight="bold">
          AppBar
        </Typography>
        <Stack direction="column" spacing={2}>
          <AppBar position='relative' >
            <Toolbar>
              <Grid container alignItems="center" sx={{ width: '100%' }} spacing={0}>
                <Grid size={5}>
                  <Typography color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} >
                    AppBar Surface Container
                  </Typography>
                </Grid>
                <Grid size={6}/>
                <Grid size={1}>
                  <Tooltip title="Mails">
                    <IconButton color="inherit">
                      <Badge color="primary" badgeContent={3}>
                        <MailIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Alerts">
                    <IconButton color="inherit">
                      <Badge badgeContent={2}>
                        <NotificationIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar position='relative' color='primary' >
            <Toolbar>
              <Grid container alignItems="center" sx={{ width: '100%' }} spacing={0}>
                <Grid size={5}>
                  <Typography color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} >
                    AppBar Surface
                  </Typography>
                </Grid>
                <Grid size={6}/>
                <Grid size={1}>
                  <Tooltip title="Mails">
                    <IconButton color="inherit">
                      <Badge color="primary" badgeContent={3}>
                        <MailIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Alerts">
                    <IconButton color="inherit">
                      <Badge badgeContent={2}>
                        <NotificationIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <AppBar position='relative' >
            <Toolbar>
              <Grid container alignItems="center" sx={{ width: '100%' }}>
                <Grid size={5}>
                  <IconButton color="inherit">
                    <BackIcon />
                  </IconButton>
                </Grid>
                <Grid size={6}/>
                <Grid size={1}>
                  <Tooltip title="Mails">
                    <IconButton color="inherit">
                      <Badge color="primary" badgeContent={3}>
                        <MailIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Alerts">
                    <IconButton color="inherit">
                      <Badge badgeContent={2}>
                        <NotificationIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
            <Toolbar>
              <Grid container alignItems="center" spacing={1}>
                <Grid>
                  <Typography color="inherit" sx={{ fontSize: 24, fontWeight: 500 }} >
                    AppBar Extended
                  </Typography>
                </Grid>

              </Grid>
            </Toolbar>
          </AppBar>
        </Stack>
      </Stack>
    </>
  );
};
