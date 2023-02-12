import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { blueTheme } from './blueTheme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ blueTheme }>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
