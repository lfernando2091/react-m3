import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { IconButton } from '@react-m3/m3';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const TextFieldSection = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Text Field
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
        <TextField label="Filled" variant="filled"
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
                   }}/>
        <TextField label="Filled" variant="filled" disabled
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
                   }}/>
        <TextField
          error
          label="Filled"
          variant="filled"
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
        <TextField label="Standard" variant="standard"
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
                   }}/>
        <TextField error label="Standard" variant="standard"
                   helperText="My helper text"
                   defaultValue="Abcd"
                   placeholder="My placeholder text"
                   slotProps={{
                     input: {
                       startAdornment: (
                         <InputAdornment position="start" color="inherit">±</InputAdornment>
                       ),
                       endAdornment: (
                         <InputAdornment position="end" color="inherit">
                           <IconButton edge="end">
                             <HighlightOffIcon color="inherit"/>
                           </IconButton>
                         </InputAdornment>
                       ),
                     },
                   }}/>
        <TextField disabled label="Standard" variant="standard"
                   helperText="My helper text"
                   defaultValue="Abcd"
                   placeholder="My placeholder text"
                   slotProps={{
                     input: {
                       startAdornment: (
                         <InputAdornment position="start" disableTypography>±</InputAdornment>
                       ),
                       endAdornment: (
                         <InputAdornment position="end" color="inherit">
                           <IconButton edge="end" disabled>
                             <HighlightOffIcon/>
                           </IconButton>
                         </InputAdornment>
                       ),
                     },
                   }}/>
      </Stack>
    </Stack>
  );
};
