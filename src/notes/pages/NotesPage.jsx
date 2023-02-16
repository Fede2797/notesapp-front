import { Box, Toolbar } from '@mui/material';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';

import { NewNote, NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';


export const NotesPage = () => {

    useSetNotesPage('ACTIVE');

    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />
                
                <NewNote />

                <NotesFeed />
            </Box>
        </NotesLayout>
    )
}
