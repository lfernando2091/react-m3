import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

export const ListSection = () => {
  return (<Stack spacing={3}>
    <Typography variant="h6" fontWeight="bold">
      List
    </Typography>
    <List subheader={<ListSubheader>My List</ListSubheader>}>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          100+
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton selected>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton selected>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          100+
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton selected>
          <ListItemText primary="Trash" />
        </ListItemButton>
      </ListItem>
    </List>
  </Stack>)
}
