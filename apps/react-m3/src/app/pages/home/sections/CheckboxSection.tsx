import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Stack,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const CheckboxSection = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (<Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      Checkbox
    </Typography>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
          <FormControlLabel
            control={
              <Checkbox checked={true} name="other" disabled />
            }
            label="Other"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
          <FormControlLabel
            control={
              <Checkbox checked={false} name="other" disabled />
            }
            label="Other"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>

    </Stack>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <Checkbox defaultChecked />
      <Checkbox/>
      <Checkbox defaultChecked color="error"/>
      <Checkbox disabled />
      <Checkbox disabled checked />
    </Stack>
  </Stack>)
}
