import { Stack, Typography } from '@mui/material';
import { NavigationRail } from '@react-m3/m3';
import EditIcon from '@mui/icons-material/EditTwoTone';

export const NavigationRailSection = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Navigation Rail
      </Typography>
      <Stack direction="column" sx={{ height: '600px' }}>
        {/*menuIcon*/}
        {/*actionButton*/}
        <NavigationRail
          bottomContent={<div>Bottom Content</div>}
          actionButtonIcon={<EditIcon/>}
          menuIcon
        >
          <h4>1</h4>
          <h4>1</h4>
          <h4>1</h4>
          <h4>1</h4>
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
          {/*<h4>1</h4>*/}
        </NavigationRail>
      </Stack>
    </Stack>
  );
}
