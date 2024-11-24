import {
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
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListIcon from '@mui/icons-material/List';
import ExpandIcon from '@mui/icons-material/Expand';
import MessageIcon from '@mui/icons-material/Message';
import TabIcon from '@mui/icons-material/Tab';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import NavigationIcon from '@mui/icons-material/Navigation';

import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { NavigationRail, NavItem, SwitchContainer } from '@react-m3/m3';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { useAppContext } from '../@core/AppContext';

const categories = [
  {
    id: 'Components',
    children: [
      {
        id: 'buttons',
        icon: <KeyboardCommandKeyIcon />,
        link: '/buttons'
      },
      {
        id: 'switch',
        icon: <ToggleOffIcon />,
        link: '/switch'
      },
      {
        id: 'checkbox',
        icon: <CheckBoxIcon />,
        link: '/checkbox'
      },
      {
        id: 'text-field',
        icon: <TextFieldsIcon />,
        link: '/text-field'
      },
      {
        id: 'radio-button',
        icon: <RadioButtonCheckedIcon />,
        link: '/radio-button'
      },
      {
        id: 'cards',
        icon: <ViewAgendaIcon />,
        link: '/cards'
      },
      {
        id: 'badge',
        icon: <MarkChatUnreadIcon />,
        link: '/badge'
      },
      {
        id: 'app-bar',
        icon: <DragHandleIcon />,
        link: '/app-bar'
      },
      {
        id: 'lists',
        icon: <ListIcon />,
        link: '/lists'
      },
      {
        id: 'accordion',
        icon: <ExpandIcon />,
        link: '/accordion'
      },
      {
        id: 'alert',
        icon: <MessageIcon />,
        link: '/alert'
      },
      {
        id: 'tabs',
        icon: <TabIcon />,
        link: '/tabs'
      },
      {
        id: 'divider',
        icon: <HorizontalRuleIcon />,
        link: '/divider'
      },
      {
        id: 'dialog',
        icon: <ContactSupportIcon />,
        link: '/dialog'
      },
      {
        id: 'snackbar',
        icon: <NotificationsActiveIcon />,
        link: '/snackbar'
      },
      {
        id: 'menu',
        icon: <StickyNote2Icon />,
        link: '/menu'
      },
      {
        id: 'navigation-rail',
        icon: <NavigationIcon />,
        link: '/navigation-rail'
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
              {selectedIndex === '' ? <HomeIcon /> : <HomeIconOutlined />}
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

export const MainNavRail = () => {
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(location.pathname.replace('/', ''));
  const { lightMode, switchThemeMode, switchDrawer } = useAppContext();

  useEffect(() => {
    setSelectedIndex(location.pathname.replace('/', ''));
  }, [location.pathname]);

  const handleListItemClick = (index: string) => {
    setSelectedIndex(index);
  };

  const onToggle = () => {
    switchThemeMode();
  }

  return (<div style={{ position: 'fixed', height: '100%', zIndex: 1101 }}>
    <NavigationRail menuIcon
                    menuIconOnClick={switchDrawer}
                    bottomContent={<div style={{ display: 'flex', justifyContent: 'center' }}>
      <SwitchContainer
        on={lightMode}
        onClick={onToggle}
        secondaryComponent={<LightModeIcon/>}>
        <BedtimeIcon/>
      </SwitchContainer>
    </div>}>
      <NavItem label="Home"
               component={Link}
               to="/"
               selected={selectedIndex === ''}
               onClick={() => handleListItemClick('')}>
        {selectedIndex === '' ? <HomeIcon /> : <HomeIconOutlined />}
      </NavItem>
      {categories.map(({ id, children }) => (
        <div key={id}>
          {children.map(({ id: childId, icon, link }) => (
            <NavItem key={childId}
                     label={childId}
                     component={Link}
                     to={link}
                     selected={selectedIndex === childId}
                     onClick={() => handleListItemClick(childId)}>
              {icon}
            </NavItem>
          ))}
        </div>
      ))}
    </NavigationRail>
  </div>)
}
