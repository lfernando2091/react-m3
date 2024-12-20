import { Stack, Typography, Switch, FormControlLabel } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const SwitchSection = () => {
  const [status, setStatus] = useState(true);

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Switch
      </Typography>
      <Stack direction="row" spacing={1} alignItems={'center'}>
        <Switch defaultChecked={true}></Switch>
        <Switch defaultChecked={true}
                checkedIcon={<CheckIcon/>}
                icon={<CloseIcon/>}></Switch>
        <FormControlLabel
          control={
            <Switch
              checked={status}
              onChange={() => { setStatus(!status) }}
              name="status"
            />
          }
          label={status ? "On" : "Off"}
        />
        <FormControlLabel control={<Switch />} label="Uncontrolled" />
      </Stack>
      <Stack direction="row" spacing={1} alignItems={'center'}>
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel
          disabled
          control={<Switch checked />}
          label="Disabled"
        />
        <Switch disabled defaultChecked={true}
                checkedIcon={<CheckIcon/>}
                icon={<CloseIcon/>}></Switch>
        <Switch disabled
                checkedIcon={<CheckIcon/>}
                icon={<CloseIcon/>}></Switch>
      </Stack>
    </Stack>
  );
};
