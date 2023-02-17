import { Box, Toolbar } from '@mui/material';

import { NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';
import { useSelector } from 'react-redux';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';
import { LoadingNotes } from '../../ui/components/LoadingNotes';

export const ArchivedPage = () => {

    const { notes } = useSelector( state => state.note );
    const { isLoadingNotes } = useSelector( state => state.note );

    useSetNotesPage('ARCHIVED');

    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />

                {
                    isLoadingNotes 
                        ? <LoadingNotes />
                        : <NotesFeed notes={ notes } />
                }

            </Box>
        </NotesLayout>
    )
}
