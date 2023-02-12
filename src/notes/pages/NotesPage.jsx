import { Box, Toolbar } from '@mui/material';

import { NewNote, NotesFeed } from '../components'
import { notes } from '../../notes';
import { NotesLayout } from '../layout/NotesLayout';

export const NotesPage = () => {
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
