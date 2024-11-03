import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const SwitchSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (<Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      Switch
    </Typography>
    <Stack direction="row" spacing={1} alignItems={'center'}>
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Item One" icon={<PhoneMissedIcon />} iconPosition="top"/>
            <Tab label="Item Two" icon={<FavoriteIcon />} iconPosition="top"/>
            <Tab label="Item Three"/>
            <Tab label="Item AB" disabled/>
            <Tab label="Item AC" icon={<FavoriteIcon />} iconPosition="top" disabled/>
          </Tabs>
        </Box>
        <Box>
          <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
            <Tab label="Item One" icon={<PhoneMissedIcon />} iconPosition="start"/>
            <Tab label="Item Two" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Item Three"/>
            <Tab label="Item AB" disabled/>
            <Tab label="Item AB" icon={<FavoriteIcon />} iconPosition="start" disabled/>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Stack>
  </Stack>)
}
