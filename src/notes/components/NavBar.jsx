import { useDispatch } from 'react-redux';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import { SearchBar } from './SearchBar';
import { startLogout } from '../../store/auth';
import { CustomTooltip } from './CustomTooltip';
import { Link } from 'react-router-dom';

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
