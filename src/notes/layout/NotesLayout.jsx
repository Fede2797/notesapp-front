import { Box, CssBaseline } from '@mui/material';
import { NavBar, SideBar } from '../components';
import SideBarTest from '../components/SideBarTest';

export const NotesLayout = ({ children }) => {

    const drawerSize = 280;

    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline enableColorScheme />

        <NavBar />

        {/* <SideBar drawerSize={ drawerSize } /> */}
        <SideBarTest />

        { children }

    </Box>
    )
}
