import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link as RouterLink } from "react-router-dom";
import { Link, Toolbar } from '@mui/material';

import DescriptionIcon from '@mui/icons-material/Description';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsSidebarOpen } from '../../store/note';

export default function SideBarTest() {
//   const [state, setState] = React.useState({ left: false });

  const dispatch = useDispatch();

  const { isSidebarOpen } = useSelector( state => state.note );

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    dispatch( toggleIsSidebarOpen() );
    // setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Toolbar />
        <List>
            <Link component={ RouterLink } color="inherit" to="/" style={{ textDecoration: 'none' }}>
                <ListItem key='Notes' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary='Notes' />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link component={ RouterLink } color="inherit" to="/archived" style={{ textDecoration: 'none' }}>
                <ListItem key='Archived' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <ArchiveOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Archived' />
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link component={ RouterLink } color="inherit" to="/trash" style={{ textDecoration: 'none' }}>
                <ListItem key='Paper Bin' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DeleteOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Paper bin' />
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Toolbar />
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={isSidebarOpen}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
