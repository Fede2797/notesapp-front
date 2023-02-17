import { Box } from '@mui/system';
import { IconButton, InputBase, Paper } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getNotesBySearch, setIsLoadingNotes, setSearchText } from '../../store/note';
import { useEffect, useState } from 'react';

export const SearchBar = () => {

    const dispatch = useDispatch();
    const { searchText } = useSelector( state => state.note );
    const [firstRender, setFirstRender] = useState(true);

    const dispatchSearch = () => {
        dispatch(getNotesBySearch( searchText ));
        dispatch(setIsLoadingNotes( true ));
    }

    const onInputChange = ( event ) => {
        dispatch( setSearchText(event.target.value) );
    }
 
    const handleSearch = ( event ) => {
        event.preventDefault();
        dispatchSearch();
        return false;
    }

    useEffect(() => {
        if ( firstRender ){
            setFirstRender( false );
        } else {
            const delayDebounceFn = setTimeout(() => {
                    dispatchSearch();
                }, 350)
            return () => clearTimeout(delayDebounceFn)
        }
      }, [searchText])

  return (
    // <Box
    //     display='flex'
    //     justifyContent='center'
    //     sx={{ pl: 7.5 }}
    //     width='100%'
    // >
    <Box
        display='flex'
        justifyContent='left'
        paddingLeft='280px'
        width='100%'
    >
    
        <Paper
            component='form'
            onSubmit={ handleSearch }
            sx={{ p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '50%' ,
                height: 40,
                maxWidth: 800
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search'
                onChange={ onInputChange }
                value={ searchText }
                inputProps={{ 'aria-label': 'search notes' }}
            />
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search' onSubmit={ handleSearch } onClick={ handleSearch }>
                <SearchIcon />
            </IconButton>
        </Paper>
    </Box>
  )
}
