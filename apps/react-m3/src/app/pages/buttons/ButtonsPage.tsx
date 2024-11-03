import { ButtonSection } from '../home/sections/ButtonSection';
import { IconButtonSection } from '../home/sections/IconButtonSection';
import { ToggleButtonGroupSection } from '../home/sections/ToggleButtonGroupSection';
import { FABSection } from '../home/sections/FABSection';
import { Stack } from '@mui/material';

export const ButtonsPage = () => {
  return (<Stack spacing={6}>
    <ButtonSection/>
    <IconButtonSection/>
    <ToggleButtonGroupSection/>
    <FABSection/>
  </Stack>)
}
