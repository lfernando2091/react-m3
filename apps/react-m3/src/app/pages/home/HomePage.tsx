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
import { ListSection } from './sections/ListSection';
import { AccordionSection } from './sections/AccordionSection';
import { AlertSection } from './sections/AlertSection';
import { TextFieldSection } from './sections/TextFieldSection';
import { RadioButtonSection } from './sections/RadioButtonSection';

export const HomePage = () => {
  return (<>
    <BaseColorView/>
    <Stack spacing={6}>
      <ButtonSection/>
      <IconButtonSection/>
      <ToggleButtonGroupSection/>
      <FABSection/>
      <SwitchSection/>
      <TextFieldSection/>
      <RadioButtonSection/>
      <CardSection/>
      <BadgeSection/>
      <AppBarSection/>
      <ListSection/>
      <AccordionSection/>
      <AlertSection/>
    </Stack>
  </>)
}
