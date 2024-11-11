import { Stack, Typography } from '@mui/material';
import { NavigationRail, NavItem } from '@react-m3/m3';
import EditIcon from '@mui/icons-material/EditTwoTone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Link } from 'react-router-dom';

export const NavigationRailSection = () => {

  const onClickNav = () => {

  }

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Navigation Rail
      </Typography>
      <Stack direction="column" sx={{ height: '600px' }}>
        {/*menuIcon*/}
        {/*actionButton*/}
        <NavigationRail
          bottomContent={<div>Bottom Content</div>}
          actionButtonIcon={<EditIcon/>}
          menuIcon
        >
          <NavItem label="Message" component={Link} to='/' selected>
            <TextsmsIcon/>
          </NavItem>
          <NavItem label="Mic" href="/">
            <HeadsetMicIcon/>
          </NavItem>
          <NavItem label="Forward">
            <ForwardToInboxIcon/>
          </NavItem>
          <NavItem label="Phone" onClick={onClickNav}>
            <PhoneIcon/>
          </NavItem>
          <NavItem label="Telegram" onClick={onClickNav}>
            <TelegramIcon/>
          </NavItem>
        </NavigationRail>
      </Stack>
    </Stack>
  );
}
