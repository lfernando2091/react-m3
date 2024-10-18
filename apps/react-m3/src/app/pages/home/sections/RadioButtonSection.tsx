import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

export const RadioButtonSection = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (<Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      Radio Button
    </Typography>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" disabled/>
        </RadioGroup>
        <FormHelperText>My helper text</FormHelperText>
      </FormControl>
    </Stack>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <FormControl disabled>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" disabled/>
        </RadioGroup>
        <FormHelperText>My helper text</FormHelperText>
      </FormControl>
    </Stack>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
      />
      <Radio
        disabled
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
      />
      <Radio
        disabled
        checked={true}
        value="d"
        name="radio-buttons"
      />
    </Stack>
  </Stack>);
}
