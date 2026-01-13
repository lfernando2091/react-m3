import { Button, IconButton, Snackbar, SnackbarCloseReason, SnackbarContent, Stack, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const action = (
  <>
    <Button variant="text" color="inverse">
      lorem ipsum dolorem
    </Button>
    <IconButton
      color="inherit"
      sx={{ p: 0.5 }}
    >
      <CloseIcon />
    </IconButton>
  </>
);

function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </Stack>
  );
}

function SimpleSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Button variant="text" color="inverse" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}

export const SnackbarSection = () => {
  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Snackbar
      </Typography>
      <Stack direction="column" spacing={2}>
        <LongTextSnackbar/>
      </Stack>
      <Stack direction="column" spacing={2}>
        <SimpleSnackbar/>
      </Stack>
    </Stack>
  );
}
