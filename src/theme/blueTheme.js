import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            white: '#FFF'
            // main: '#4caf50'
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