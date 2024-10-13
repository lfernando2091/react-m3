import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { IconButton } from '@react-m3/m3';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const TextFieldSection = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Accordion
      </Typography>
      <Stack direction="column" spacing={2}>
        <TextField
          label="Outlined"
          variant="outlined"
          helperText="My helper text"
          defaultValue="Abcd"
          placeholder="My placeholder text"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <p color="inherit">±</p>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <HighlightOffIcon color="inherit" />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          disabled
          label="Outlined"
          variant="outlined"
          helperText="My helper text"
          defaultValue="Abcd"
          placeholder="My placeholder text"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" disableTypography>
                  ±
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" disabled>
                    <HighlightOffIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField
          error
          label="Outlined"
          variant="outlined"
          helperText="My helper text"
          defaultValue="Abcd"
          placeholder="My placeholder text"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">±</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" color="inherit">
                  <IconButton edge="end">
                    <HighlightOffIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        <TextField label="Outlined" variant="outlined" color="secondary" />
        <TextField
          label="Outlined"
          variant="outlined"
          color="secondary"
          disabled
        />
        <TextField label="Filled" variant="filled" />
        <TextField label="Filled" variant="filled" disabled />
        <TextField label="Standard" variant="standard" />
        <TextField label="Standard" variant="standard" disabled />
      </Stack>
    </Stack>
  );
};
