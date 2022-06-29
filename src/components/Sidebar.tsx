import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, PaletteMode, Switch } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { AccountBox, Groups, Home, ModeNight, Pages, Person, Settings, Shop } from '@mui/icons-material';

type SidebarProps = {
  mode: string;
  setMode:  Dispatch<SetStateAction<PaletteMode>>;
}

const Sidebar = ({ mode, setMode }: SidebarProps) => {
  const sideBarIcons = [
    {
      id: 1,
      text: "HomePage",
      icon: <Home />,
    },
    {
      id: 2,
      text: "Pages",
      icon: <Pages />,
    }, 
    {
      id: 3, 
      text: "Groups",
      icon: <Groups />,
    },
    {
      id: 4,
      text: "MarketPlace",
      icon: <Shop />,
    },
    {
      id: 5,
      text: "Friends",
      icon: <Person />,
    },
    {
      id: 6,
      text: "Settings",
      icon: <Settings />,
    },
    {
      id: 7,
      text: "Profile",
      icon: <AccountBox />,
    }

  ]
  return (
    <Box 
        flex={1}
        p={2} //padding 2
        sx={{ display: { xs: 'none', sm: 'block' } }} // xs display => none, sm => block
    >
      <Box
        position="fixed"
      >

        {
          sideBarIcons.map(sidebarIcon => (
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href={`#${sidebarIcon.text}`}>
                  <ListItemIcon>
                    {sidebarIcon.icon }
                  </ListItemIcon>
                  <ListItemText primary={sidebarIcon.text} />
                </ListItemButton>
              </ListItem>
            </List>
          ))
        }
        {/* Switch */}
        <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#">
                  <ListItemIcon>
                    <ModeNight />
                  </ListItemIcon>
                  <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}/>
                </ListItemButton>
              </ListItem>
            </List>
          
      </Box>
    </Box> 
  )
}

export default Sidebar;