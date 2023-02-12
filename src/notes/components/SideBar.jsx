import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'

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
                <ListItem key='Notes' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary='Notes' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='Archived' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <ArchiveOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Archived' />
                    </ListItemButton>
                </ListItem>
                <ListItem key='Trash' disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <DeleteOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Trash' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}
