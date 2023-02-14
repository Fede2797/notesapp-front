import { Box, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

import DescriptionIcon from '@mui/icons-material/Description';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export const SideBar = ({ drawerSize }) => {
  return (
    <Drawer
        variant='permanent'
        sx={{
        width: drawerSize,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerSize, boxSizing: 'border-box' },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
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
    </Drawer>
  )
}
