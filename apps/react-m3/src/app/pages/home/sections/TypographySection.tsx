import { Box, Stack, Typography } from '@mui/material';

export const TypographySection = () => {
  return <Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      Typography
    </Typography>
    <Box sx={{ width: '100%' }}>
      <Typography variant="displayLarge">
        display. Large
      </Typography>
      <Typography variant="displayMedium">
        display. Medium
      </Typography>
      <Typography variant="displaySmall" gutterBottom>
        display. Small
      </Typography>
      <Typography variant="headlineLarge">
        headline. Large
      </Typography>
      <Typography variant="headlineMedium">
        headline. Medium
      </Typography>
      <Typography variant="headlineSmall" gutterBottom>
        headline. Small
      </Typography>
      <Typography variant="titleLarge" gutterBottom>
        title. Large - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="titleMedium" gutterBottom>
        title. Medium - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="titleSmall" gutterBottom>
        title. Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="bodyLarge" gutterBottom>
        body. Large - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="bodyMedium" gutterBottom>
        body. Medium - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="bodySmall" gutterBottom>
        body. Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="labelLarge" sx={{ display: 'block' }}>
        label. Large Text
      </Typography>
      <Typography variant="labelMedium" sx={{ display: 'block' }}>
        label. Medium Text
      </Typography>
      <Typography variant="labelSmall" sx={{ display: 'block' }}>
        label. Small Text
      </Typography>
    </Box>

    <Box sx={{ width: '100%' }}>
      <Typography variant="emphasizedDisplayLarge">
        emphasized display. Large
      </Typography>
      <Typography variant="emphasizedDisplayMedium">
        emphasized display. Medium
      </Typography>
      <Typography variant="emphasizedDisplaySmall" gutterBottom>
        emphasized display. Small
      </Typography>
      <Typography variant="emphasizedHeadlineLarge">
        emphasized headline. Large
      </Typography>
      <Typography variant="emphasizedHeadlineMedium">
        emphasized headline. Medium
      </Typography>
      <Typography variant="emphasizedHeadlineSmall" gutterBottom>
        emphasized headline. Small
      </Typography>
      <Typography variant="emphasizedTitleLarge" gutterBottom>
        emphasized title. Large - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="emphasizedTitleMedium" gutterBottom>
        emphasized title. Medium - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="emphasizedTitleSmall" gutterBottom>
        emphasized title. Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="emphasizedBodyLarge" gutterBottom>
        emphasized body. Large - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="emphasizedBodyMedium" gutterBottom>
        emphasized body. Medium - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="emphasizedBodySmall" gutterBottom>
        emphasized body. Small - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="emphasizedLabelLarge" sx={{ display: 'block' }}>
        emphasized label. Large Text
      </Typography>emphasized
      <Typography variant="emphasizedLabelMedium" sx={{ display: 'block' }}>
        emphasized label. Medium Text
      </Typography>
      <Typography variant="emphasizedLabelSmall" sx={{ display: 'block' }}>
        emphasized label. Small Text
      </Typography>
    </Box>
  </Stack>
}
