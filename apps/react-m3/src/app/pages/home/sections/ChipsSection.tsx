import { Stack, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { Chip } from '@react-m3/m3';

export const ChipsSection = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack spacing={3}>
      <Typography variant="h6" fontWeight="bold">
        Chips
      </Typography>
      <Typography variant="labelMedium">Input</Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Chip label="Input" />
        <Chip label="Input Clickable" onClick={handleClick} />
        <Chip
          label="Input icons"
          onClick={handleClick}
          icon={<DoneIcon />}
          onDelete={handleClick}
          deleteIcon={<DeleteIcon />}
        />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Input Avatar"
          onClick={handleClick}
          onDelete={handleClick}
          deleteIcon={<DeleteIcon />}
        />
      </Stack>
      <Typography variant="labelMedium">Input Selected</Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Chip label="Input Selected" selected={true} />
        <Chip
          label="Input Selected clickable"
          selected={true}
          onClick={handleClick}
        />
        <Chip
          label="Input Selected icons"
          selected={true}
          onClick={handleClick}
          icon={<DoneIcon />}
          onDelete={handleClick}
          deleteIcon={<DeleteIcon />}
        />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Input Selected Avatar"
          selected={true}
          onClick={handleClick}
          onDelete={handleClick}
          deleteIcon={<DeleteIcon />}
        />
      </Stack>
      <Typography variant="labelMedium">Assist Label</Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Chip label="Assist Label" variant="assist" onClick={handleClick} />
        <Chip
          label="Assist Label Disabled"
          variant="assist"
          onClick={handleClick}
          disabled
        />
        <Chip
          icon={<DoneIcon />}
          label="Assist Label Icon"
          variant="assist"
          onClick={handleClick}
        />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Assist Label Avatar"
          variant="assist"
          onClick={handleClick}
        />
      </Stack>
      <Typography variant="labelMedium">Assist Label Elevated</Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Chip
          label="Assist Elevated"
          variant="assist"
          elevated
          onClick={handleClick}
        />
        <Chip
          label="Assist Elevated Disabled"
          variant="assist"
          elevated
          disabled
          onClick={handleClick}
        />
        <Chip
          icon={<DoneIcon />}
          label="Assist Elevated Icon"
          variant="assist"
          elevated
          onClick={handleClick}
        />
        <Chip
          avatar={<Avatar>M</Avatar>}
          label="Assist Elevated Avatar"
          variant="assist"
          elevated
          onClick={handleClick}
        />
      </Stack>

      <Typography variant="labelMedium">Filter</Typography>
      <Stack direction="row" spacing={2} flexWrap={'wrap'}>
        <Chip
          label="Assist Elevated"
          variant="filter"
          elevated
          onClick={handleClick}
        />
      </Stack>

      <Typography variant="labelMedium">Suggestion</Typography>
    </Stack>
  );
}
