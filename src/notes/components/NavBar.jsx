import { useDispatch } from 'react-redux';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
// import DescriptionIcon from '@mui/icons-material/Description';
import { SearchBar } from './SearchBar';
import { startLogout } from '../../store/auth';
import { CustomTooltip } from './CustomTooltip';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleIsSidebarOpen } from '../../store/note';

export const NavBar = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() );
    }

    const onToggle = () => {
        console.log("hola");
        dispatch( toggleIsSidebarOpen() );
    }

    return (
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>

                <IconButton
                    onClick={ onToggle }
                    sx={{ mr: 1 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Typography variant='h6' color='inherit' noWrap>
                            NotesApp
                        </Typography>
                    </Link>
                </Box>
                
                <SearchBar />

                <CustomTooltip title='Log out'>
                <IconButton 
                    color='stockWhite'
                    onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>
                </CustomTooltip>

            </Toolbar>
        </AppBar>
    )
}
