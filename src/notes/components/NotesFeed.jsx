import { useDispatch, useSelector } from 'react-redux';

import { Typography, Box, Card, CardContent, Grid, Container, 
    // TextareaAutosize, 
    Tooltip } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import { CardButtons } from './CardButtons';
import { setNote, setNoteInitialState } from '../../store/note';
import { updateNote } from '../../helpers/loadNotes';
import { CustomTooltip } from './CustomTooltip';
import { useForm } from '../../hooks/useForm';
import TextareaAutosize from 'react-textarea-autosize';

export const NotesFeed = () => {

    const { notes, noteInitialState, stateToDisplay } = useSelector( state => state.note );

    const dispatch = useDispatch();

    const handleFocus = ( note ) => {
        dispatch(setNoteInitialState( note ));
    }

    const handleBlur = ( note ) => {
        if( noteInitialState.title !== note.title || noteInitialState.description !== note.description ){
            updateNote( note );
        }
        dispatch(setNoteInitialState({title: '', description: ''}));
    }

    const formatDate = ( date, style ) => {
        const unixDate = new Date(date);
        date = unixDate.toLocaleString('en-AR', style); 
        return date;
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
                    <Grid 
                        item 
                        key={note._id}
                        className={ ( notes.includes(note) ) ? "animate__animated animate__fadeIn animate__faster" : "animate__animated animate__fadeOut" }
                    >
                        <Card 
                            sx={{ ':hover': { boxShadow: 4 } }}
                            variant="outlined"
                        >
                        <CardContent>
                            <TextareaAutosize 
                                style={{ width: '100%', fontWeight: 500 }}
                                minRows={1}
                                variant='h5' 
                                component='h2'
                                name='title'
                                defaultValue={note.title}
                                onFocus={ () => handleFocus( note ) }
                                onBlur={ ( event ) => handleBlur({ _id: note._id, title: event.target.value , description: note.description }) }
                                disabled={ !!( stateToDisplay === 'DELETED' ) }
                            />

                            <TextareaAutosize 
                                style={{ width: '100%', fontSize: 14 }}
                                minRows={1}
                                name='description'
                                defaultValue={note.description}
                                onFocus={ () => handleFocus( note ) }
                                onBlur={ ( event ) => handleBlur({ _id: note._id, title: note.title , description: event.target.value }) }
                                disabled={ !!( stateToDisplay === 'DELETED' ) }
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
                            <CustomTooltip title={formatDate(note.dateModify, {dateStyle: "long", timeStyle: "medium"})}>
                                <Typography 
                                    variant='caption'
                                    color='grey'
                                    
                                >{ formatDate(note.dateModify, {dateStyle: "medium"}) }</Typography>
                            </CustomTooltip>
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
