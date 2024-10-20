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

import HomeIcon from '@mui/icons-material/Home';
import HomeIconOutlined from '@mui/icons-material/HomeOutlined';
import NoteIcon from '@mui/icons-material/Note';

import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Empty',
        icon: <NoteIcon />,
        link: '/empty'
      }
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
        <Typography sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
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
            {children.map(({ id: childId, icon, link }) => (
              <ListItem key={childId}>
                <ListItemButton component={Link} selected={selectedIndex === childId} to={link} onClick={() => handleListItemClick(childId)}>
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
