import { CardSection } from '../home/sections/CardSection';
import { PaperSection } from '../home/sections/PaperSection';
import { Stack } from '@mui/material';

export const CardPage = () => {
  return (<Stack spacing={6}>
    <CardSection/>
    <PaperSection/>
  </Stack>)
}
