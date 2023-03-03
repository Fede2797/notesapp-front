import { Alert, Box, Grid, Toolbar } from '@mui/material';

import { NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';
import { useSelector } from 'react-redux';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';
import { LoadingNotes } from '../../ui/components/LoadingNotes';

export const TrashPage = () => {

    const { notes } = useSelector( state => state.note );
    const { isLoadingNotes } = useSelector( state => state.note );

    useSetNotesPage('DELETED');
    
    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />
                
                <Grid
                    item 
                    xs={ 12 }
                    sx={{ margin: 3, marginBottom: 1 }}
                    width={ 300 }
                >
                    <Alert severity='warning' variant="outlined" >
                        Trash notes are deleted after 72hs.
                    </Alert>
                </Grid>

                {
                    isLoadingNotes 
                        ? <LoadingNotes />
                        : <NotesFeed notes={ notes } />
                }

            </Box>
        </NotesLayout>
    )
}
