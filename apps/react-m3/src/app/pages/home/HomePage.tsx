import { ButtonSection } from './sections/ButtonSection';
import { BaseColorView } from './sections/BaseColorSection';
import { IconButtonSection } from './sections/IconButtonSection';
import { Stack } from '@mui/material';
import { ToggleButtonGroupSection } from './sections/ToggleButtonGroupSection';
import { FABSection } from './sections/FABSection';
import { SwitchSection } from './sections/SwitchSection';
import { CardSection } from './sections/CardSection';
import { BadgeSection } from './sections/BadgeSection';
import { AppBarSection } from './sections/AppBarSection';

export const HomePage = () => {
  return (<>
    <BaseColorView/>
    <Stack spacing={6}>
      <ButtonSection/>
      <IconButtonSection/>
      <ToggleButtonGroupSection/>
      <FABSection/>
      <SwitchSection/>
      <CardSection/>
      <BadgeSection/>
      <AppBarSection/>
    </Stack>
  </>)
}
