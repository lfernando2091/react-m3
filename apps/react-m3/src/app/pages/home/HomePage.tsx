import { BaseColorView } from './sections/BaseColorSection';
import { useAppContext } from '../../@core/AppContext';
import { Card, CardActionArea, CardContent, FormControlLabel, Switch, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

type MenuItem = {
  title: string;
  description: string;
  url: string;
}

const MainMenu: MenuItem[] = [
  {
    title: "Colors",
    description: "Colors component",
    url: "/color"
  },
  {
    title: "Buttons",
    description: "Standard buttons, Icon buttons, Toggle buttons, Segmented buttons, Floating Actions buttons",
    url: "/buttons"
  },
  {
    title: "Switch",
    description: "Switch component",
    url: "/switch"
  },
  {
    title: "Checkbox",
    description: "Checkbox component",
    url: "/checkbox"
  },
  {
    title: "Text Field",
    description: "Text Field outlined, filled and standard component",
    url: "/text-field"
  },
  {
    title: "Radio Button",
    description: "Radio Button component",
    url: "/radio-button"
  },
  {
    title: "Cards",
    description: "Cards and Papers component",
    url: "/cards"
  },
  {
    title: "Badge",
    description: "Badge component",
    url: "/badge"
  },
  {
    title: "App Bar",
    description: "App Bar component",
    url: "/app-bar"
  },
  {
    title: "List",
    description: "List component",
    url: "/lists"
  },
  {
    title: "Accordion",
    description: "Accordion component",
    url: "/accordion"
  },
  {
    title: "Alert",
    description: "Alert message component",
    url: "/alert"
  },
  {
    title: "Tabs",
    description: "Tabs primary and secondary component",
    url: "/tabs"
  },
  {
    title: "Divider",
    description: "Divider component",
    url: "/divider"
  },
  {
    title: "Dialog",
    description: "Dialog component",
    url: "/dialog"
  },
  {
    title: "Snackbar",
    description: "Snackbar component",
    url: "/snackbar"
  },
  {
    title: "Menu",
    description: "Menu component",
    url: "/menu"
  },
  {
    title: "Navigation Rail",
    description: "Navigation rail component",
    url: "/navigation-rail"
  },
  {
    title: "Table",
    description: "Table component",
    url: "/table"
  },
  {
    title: "Typography",
    description: "Typography component",
    url: "/typography"
  }
]

type MenuItemCard = {
  data: MenuItem
}

const MenuItemCard = ({ data }: MenuItemCard) => {
  const nav = useNavigate();

  const onClickItem = () => {
    nav(data.url)
  }

  return (
    <Card variant="elevation">
      <CardActionArea onClick={onClickItem}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            { data.title }
          </Typography>
          <Typography variant="body2">
            { data.description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export const HomePage = () => {
  const { lightMode, switchThemeMode } = useAppContext();
  return (<>
    <BaseColorView/>
    <FormControlLabel
      control={
        <Switch
          checked={lightMode}
          onChange={() => { switchThemeMode() }}
          name="status"
        />
      }
      label={lightMode ? "Light mode" : "Dark mode"}
    />
    <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
      Supported components
    </Typography >
    <Grid container spacing={2}>
      {MainMenu.map((item: MenuItem, i: number) => (
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }} key={i}><MenuItemCard data={item}/></Grid>
      ))}
    </Grid>
  </>)
}
