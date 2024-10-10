import { Stack, Typography, Alert, AlertTitle } from '@mui/material';

export const AlertSection = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Alert
      </Typography>
      <Stack direction="column" spacing={2}>
        <Alert severity="error" onClose={() => { }}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="error" variant="filled" onClose={() => { }}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="error" variant="outlined" onClose={() => { }}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning" onClose={() => { }}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning" variant="filled" onClose={() => { }}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="warning" variant="outlined" onClose={() => { }}>
          <AlertTitle>Warning</AlertTitle>
          This is a warning alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info" onClose={() => { }}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info" variant="filled" onClose={() => { }}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="info" variant="outlined" onClose={() => { }}>
          <AlertTitle>Info</AlertTitle>
          This is an info alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success" onClose={() => { }}>
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success" variant="filled" onClose={() => { }}>
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
        <Alert severity="success" variant="outlined" onClose={() => { }}>
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    </Stack>
  );
};
