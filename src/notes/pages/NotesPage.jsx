import { Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';

import { NewNote, NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';

export const NotesPage = () => {

    const { notes } = useSelector( state => state.note );

    useSetNotesPage('ACTIVE');

    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />
                
                <NewNote />

                <NotesFeed notes={ notes } />
            </Box>
        </NotesLayout>
    )
}
