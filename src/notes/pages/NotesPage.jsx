import { Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSetNotesPage } from '../../hooks/useSetNotesPage';
import { LoadingNotes } from '../../ui/components/LoadingNotes';

import { NewNote, NotesFeed } from '../components'
import { NotesLayout } from '../layout/NotesLayout';


export const NotesPage = () => {

    const { isLoadingNotes } = useSelector( state => state.note );

    useSetNotesPage('ACTIVE');

    return (
        <NotesLayout>
            <Box justifyContent='center' width='100vw'>
                <Toolbar />
                
                {
                    isLoadingNotes 
                        ? <LoadingNotes />
                        : <>
                            <NewNote />
                            <NotesFeed />
                          </>
                }
            </Box>
        </NotesLayout>
    )
}
