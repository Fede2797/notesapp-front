import { Box, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavBar, SideBar } from '../components';
import SideBarMobile from '../components/SideBarMobile';

export const NotesLayout = ({ children }) => {

    const { screenWidth } = useSelector( state => state.note );
    const mobileScreen = ( screenWidth <= 768 );

    const drawerSize = 280;

    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline enableColorScheme />

        <NavBar />

        {/* <SideBar drawerSize={ drawerSize } /> */}
        {
            mobileScreen 
                ? <SideBarMobile />
                : <SideBar drawerSize={ drawerSize } />
        }
        

        { children }

    </Box>
    )
}
