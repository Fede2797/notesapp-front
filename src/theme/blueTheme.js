import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

export const blueTheme = createTheme({
    palette: {
        mode: 'dark',
        credentialsButtons: createColor('#525252'),
        primary: {
            main: '#1976d2',
            white: '#FFF',
            blackButton: '#151515'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A700
        },
        stockWhite: {
            main: '#FFF'
        }
    }
})