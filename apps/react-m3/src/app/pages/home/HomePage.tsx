import { ButtonSection } from './sections/ButtonSection';
import { BaseColorView } from './sections/BaseColorSection';
import { IconButtonSection } from './sections/IconButtonSection';
import { Stack } from '@mui/material';
import { ToggleButtonGroupSection } from './sections/ToggleButtonGroupSection';

export const HomePage = () => {
  return (<>
    <BaseColorView/>
    <Stack spacing={6}>
      <ButtonSection/>
      <IconButtonSection/>
      <ToggleButtonGroupSection/>
    </Stack>
  </>)
}
