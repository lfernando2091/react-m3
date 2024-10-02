import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton, ListItemIcon,
  ListItemText, ListSubheader,
  Toolbar,
  Typography
} from '@mui/material';

import PeopleIcon from '@mui/icons-material/PeopleOutline';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernetOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponentOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';

import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon />,
      },
      { id: 'Database', icon: <PeopleIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
];

export const MainDrawer = (props: DrawerProps) => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));
  const { onClose, ...others } = props;

  useEffect(() => {
    setSelectedIndex(location.pathname.replace('/', ''));
  }, [location.pathname])


  const handleListItemClick = (index: string) => {
    setSelectedIndex(index);
    onClose?.({}, 'backdropClick');
  };

  return (
    <Drawer {...others} onClose={onClose}>
      <Toolbar>
        <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
          Material You
        </Typography>
      </Toolbar>
      <List>
        <ListItem divider>
          <ListItemButton component={Link} to='/' selected={selectedIndex === ''} onClick={() => handleListItemClick('')}>
            <ListItemIcon>
              {selectedIndex === 'Home' ? <HomeIcon /> : <HomeIconOutlined />}
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
            100+
          </ListItemButton>
        </ListItem>
      </List>
        {categories.map(({ id, children }) => (
          <List key={id} subheader={<ListSubheader>{id}</ListSubheader>}>
            {children.map(({ id: childId, icon }) => (
              <ListItem key={childId}>
                <ListItemButton selected={selectedIndex === childId} onClick={() => handleListItemClick(childId)}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
    </Drawer>
  )
}
