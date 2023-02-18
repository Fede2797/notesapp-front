import { useDispatch, useSelector } from 'react-redux';

import { Typography, Box, Card, CardContent, Grid, Container, TextareaAutosize, Tooltip } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import { CardButtons } from './CardButtons';
import { setNote, setNotesInitialState } from '../../store/note';
import { updateNote } from '../../helpers/loadNotes';
import { CustomTooltip } from './CustomTooltip';


export const NotesFeed = () => {

    const { notes, notesInitialState, stateToDisplay, focusedNote } = useSelector( state => state.note );
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
                        // className="animate__animated animate__fadeIn animate__faster"
                        className={ ( notes.includes(note) ) ? "animate__animated animate__fadeIn animate__faster" : "animate__animated animate__fadeOut" }
                    >
                        <Card 
                            sx={{ ':hover': { boxShadow: 4 } }}
                            variant="outlined"
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
                                disabled={ !!( stateToDisplay === 'DELETED' ) }
                            />

                            {/* <textarea

                            /> */}
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
