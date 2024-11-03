import { Box, Paper, Stack, Typography } from '@mui/material';

export const PaperSection = () => {
  return <Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      Paper
    </Typography>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 0
        </Paper>
        <Paper sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 1
        </Paper>
        <Paper elevation={2} sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 2
        </Paper>
        <Paper elevation={3} sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 3
        </Paper>
        <Paper elevation={4} sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 4
        </Paper>
        <Paper elevation={5} sx={{ textAlign: 'center', alignContent: 'center' }}>
          elevation 5
        </Paper>
      </Box>
    </Stack>
    <Stack direction='row' spacing={2} flexWrap={'wrap'}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper variant="outlined"/>
        <Paper variant="outlined" square/>
      </Box>
    </Stack>
  </Stack>;
}
