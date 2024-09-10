import { Stack, Typography } from '@mui/material';
import SettingIcon from '@mui/icons-material/Settings';
import { IconButton, ToggleButton } from '@react-m3/m3';
import SettingIconFilled from '@mui/icons-material/Settings';
import SettingIconOutlined from '@mui/icons-material/SettingsOutlined';
import { useState } from 'react';

export const IconButtonSection = () => {
  const [selected1, setSelected1] = useState(false);
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Icon Button
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton><SettingIcon /></IconButton>
        <IconButton variant="filled"><SettingIcon /></IconButton>
        <IconButton variant="tonal"><SettingIcon /></IconButton>
        <IconButton variant="outlined"><SettingIcon /></IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton disabled><SettingIcon /></IconButton>
        <IconButton disabled variant="filled"><SettingIcon /></IconButton>
        <IconButton disabled variant="tonal"><SettingIcon /></IconButton>
        <IconButton disabled variant="outlined"><SettingIcon /></IconButton>
      </Stack>
      <Typography variant="h6" fontWeight="bold">
        Toggle Button
      </Typography>
      <Stack direction="row" spacing={1}>
        <ToggleButton
          value="check"
          selected={selected1}
          onChange={() => {
            setSelected1(!selected1);
          }}>
          {selected1 ? <SettingIconFilled /> : <SettingIconOutlined />}
        </ToggleButton>
        <ToggleButton
          value="check"
          variant="filled"
          selected={selected1}
          onChange={() => {
            setSelected1(!selected1);
          }}>
          {selected1 ? <SettingIconFilled /> : <SettingIconOutlined />}
        </ToggleButton>
        <ToggleButton
          value="check"
          variant="tonal"
          selected={selected1}
          onChange={() => {
            setSelected1(!selected1);
          }}>
          {selected1 ? <SettingIconFilled /> : <SettingIconOutlined />}
        </ToggleButton>
        <ToggleButton
          value="check"
          variant="outlined"
          selected={selected1}
          onChange={() => {
            setSelected1(!selected1);
          }}>
          {selected1 ? <SettingIconFilled /> : <SettingIconOutlined />}
        </ToggleButton>
      </Stack>
      <Stack direction="row" spacing={1}>
        <ToggleButton
          disabled
          value="check"
          selected={selected1}>
          <SettingIconOutlined />
        </ToggleButton>
        <ToggleButton
          disabled
          value="check"
          variant="filled"
          selected={selected1}>
          <SettingIconOutlined />
        </ToggleButton>
        <ToggleButton
          disabled
          value="check"
          variant="tonal"
          selected={selected1}>
          <SettingIconOutlined />
        </ToggleButton>
        <ToggleButton
          disabled
          value="check"
          variant="outlined"
          selected={selected1}>
          <SettingIconOutlined />
        </ToggleButton>
      </Stack>
    </Stack>
  );
};
