import { Box } from '@mui/system';
import { IconButton, InputBase, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <Box
        display='flex'
        justifyContent='center'
        sx={{ pl: 7.5 }}
        width='100%'
    >
        <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' , height: 40 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search'
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    </Box>
  )
}
