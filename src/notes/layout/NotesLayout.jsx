import { Box, CssBaseline } from '@mui/material';
import { NavBar, SideBar } from '../components';

export const NotesLayout = ({ children }) => {

    const drawerSize = 240;

    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline enableColorScheme />

        <NavBar />

        <SideBar drawerSize={ drawerSize } />

        { children }

    </Box>
    )
}
