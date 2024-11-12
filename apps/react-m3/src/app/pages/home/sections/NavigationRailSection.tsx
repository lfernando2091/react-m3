import { Stack, Typography } from '@mui/material';
import { NavigationRail, NavItem, SwitchContainer } from '@react-m3/m3';
import EditIcon from '@mui/icons-material/EditTwoTone';
import TextsmsIcon from '@mui/icons-material/Textsms';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIcon from '@mui/icons-material/Phone';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavigationRailSection = () => {
  const [toggle, setToggle ] = useState(true);

  const onClickNav = () => {

  }

  const onToggle = () => {
    setToggle(!toggle);
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Navigation Rail
      </Typography>
      <Stack direction="column" sx={{ height: '600px' }}>
        <NavigationRail
          bottomContent={<div style={{ display: 'flex', justifyContent: 'center' }}>
            <SwitchContainer
              on={toggle}
              onClick={onToggle}
              secondaryComponent={<LightModeIcon/>}>
              <BedtimeIcon/>
            </SwitchContainer>
          </div>}
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
        </NavigationRail>
      </Stack>
    </Stack>
  );
}
