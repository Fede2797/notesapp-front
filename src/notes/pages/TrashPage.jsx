import { Alert, Box, Grid, Toolbar } from '@mui/material';

import { NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';
import { useSelector } from 'react-redux';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';

export const TrashPage = () => {

    const { notes } = useSelector( state => state.note );
    useSetNotesPage('DELETED');
    


    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />
                
                <Grid
                    item 
                    xs={ 12 }
                    sx={{ margin: 3, marginBottom: 1 }}
                    width={ 350 }
                >
                    <Alert severity='warning' variant="outlined" >
                        Trash notes are deleted after 72hs.
                    </Alert>
                </Grid>

                <NotesFeed notes={ notes } />

            </Box>
        </NotesLayout>
    )
}
