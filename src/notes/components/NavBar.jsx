import { useDispatch } from 'react-redux';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import { SearchBar } from './SearchBar';

export const NavBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

  return (
    <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <DescriptionIcon sx={{ mr: 1 }} />
            <Box>
                <Typography variant='h6' color="inherit" noWrap>
                    NotesApp
                </Typography>
            </Box>
            
            <SearchBar />

            <IconButton 
                color="stockWhite"
                onClick={ onLogout }
            >
                <LogoutOutlined />
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
