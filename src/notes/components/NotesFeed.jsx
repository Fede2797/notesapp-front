import { useDispatch, useSelector } from 'react-redux';

import { Typography, Box, Card, CardContent, Grid, Container, TextareaAutosize } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import { CardButtons } from './CardButtons';
import { setNote, setNotesInitialState } from '../../store/note';
import { updateNote } from '../../helpers/loadNotes';


export const NotesFeed = () => {

    const { notes, notesInitialState } = useSelector( state => state.note );
    const dispatch = useDispatch();

    const handleFocus = () => {
        dispatch(setNotesInitialState( notes ));
    }

    const onInputChange = ( event, index ) => {
        const { name, value } = event.target;
        dispatch( setNote({ index, value, property: name }) );
    }

    const handleBlur = ( note ) => {
        if( notesInitialState != notes ){
            updateNote( note );
        }
        dispatch(setNotesInitialState([]));
    }

    return (
        <Container sx={{ py: 3 }} maxWidth='xxl'>
            <Grid container justifyContent='center'>

            <Masonry
            className='my-masonry-grid'
            columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            spacing={2}
            >
                {
                    notes.map((note, index) => (
                    <Grid item key={note._id}>
                        <Card
                            sx={{ ':hover': { boxShadow: 4 } }}
                        >
                        <CardContent>
                            <TextareaAutosize 
                                placeholder='Title'
                                style={{ width: '100%', fontWeight: 500 }}
                                minRows={1}
                                variant='h5' 
                                component='h2'
                                name='title'
                                value={note.title}
                                onChange={ ( event ) => onInputChange( event, index ) }
                                onFocus={ handleFocus }
                                onBlur={ () => handleBlur( note ) }
                            />

                            {/* insert description */}
                            <TextareaAutosize 
                                placeholder='Add a new note'
                                style={{ width: '100%', fontSize: 14 }}
                                minRows={1}
                                name='description'
                                value={note.description}
                                onChange={ ( event ) => onInputChange( event, index ) }
                                onFocus={ handleFocus }
                                onBlur={ () => handleBlur( note ) }
                            />
                        </CardContent>
                        <Box 
                            justifyContent='space-between'
                            display='flex'
                        >
                            <Box
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                marginLeft='15px'
                            >
                            <Typography 
                                variant='caption'
                                color='grey'
                            >{ note.dateModify }</Typography>
                            </Box>

                            <CardButtons note={ note } index={ index } />
                            
                        </Box>
                        </Card>
                    </Grid>
                    ))
                }
            </Masonry>

            </Grid>
        </Container>
    )
}
