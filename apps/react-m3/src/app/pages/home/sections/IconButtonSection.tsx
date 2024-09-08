import { Stack, Typography } from '@mui/material';
import SettingIcon from '@mui/icons-material/Settings';
import { IconButton } from '@react-m3/m3';

export const IconButtonSection = () => {
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
        <IconButton variant="outlined"><SettingIcon /></IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <IconButton disabled><SettingIcon /></IconButton>
        <IconButton disabled variant="filled"><SettingIcon /></IconButton>
        <IconButton disabled variant="tonal"><SettingIcon /></IconButton>
        <IconButton disabled variant="outlined"><SettingIcon /></IconButton>
        <IconButton disabled variant="outlined"><SettingIcon /></IconButton>
      </Stack>
    </Stack>
  );
};
