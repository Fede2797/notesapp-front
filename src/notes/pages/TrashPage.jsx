import { Box, Toolbar } from '@mui/material';

import { NewNote, NotesFeed } from '../components'
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

                <NotesFeed notes={ notes } />

            </Box>
        </NotesLayout>
    )
}
