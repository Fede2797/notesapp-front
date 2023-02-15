import { useState } from "react";
import { useDispatch } from "react-redux";

import { Alert, Box, Button, Card, CardActions, CardContent, Grid, IconButton, TextareaAutosize } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { useForm } from "../../hooks";
import { postNewNote } from "../../store/note";

const formData = {
    title: '',
    description: '',
}

const formValidations = {
    title: [ ( value ) => value.length >= 1, 'The title cannot be empty.'],
    description: [ ( value ) => value.length >= 1, 'The description cannot be empty.'],
}

export const NewNote = () => {

    const [displayNewNote, setDisplayNewNote] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const { title, description, onInputChange, onResetForm, isFormValid } = useForm(formData, formValidations);

    const handleSubmit = () => {
        setFormSubmitted( true );
        if ( isFormValid ){

            dispatch(postNewNote( title, description ));
            onResetForm();
            setFormSubmitted( false );
            setDisplayNewNote( false );
        }
    }

  return (
    <Box
        width='100%' 
        justifyContent='center'
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginTop='20px'
    >
        <IconButton 
            aria-label='new note' 
            size='small' 
            color='primary'
            onClick={ () => setDisplayNewNote( !displayNewNote ) }
        >
            <AddCircleIcon sx={{ fontSize: 55 }} />
        </IconButton>

        <Box
            width='500px'
            display={ displayNewNote ? '' : 'none' }
        >
            <Card sx={{ ':hover': { boxShadow: 4 } }}>
            <CardContent style={{ paddingBottom: 0 }}>
                <TextareaAutosize 
                    placeholder='Title'
                    style={{ width: '100%', fontWeight: 500 }}
                    minRows={1}
                    variant='h5' 
                    component='h2'
                    name="title"
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextareaAutosize 
                    placeholder='Add a new note'
                    style={{ width: '100%', fontSize: 14, paddingBottom: 0 }}
                    minRows={2}
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />
                <Grid 
                    item 
                    xs={ 12 } 
                    display={ (!isFormValid && formSubmitted) ? '' : 'none' }
                >
                <Alert severity='error'>
                    The title and body of the note are obligatory.
                </Alert>
                </Grid>
            </CardContent>
            <Box
                justifyContent='space-between'
                display='flex'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                >
                </Box>
                <Box>
                <CardActions>
                    <Button onClick={ handleSubmit }>
                        ADD NOTE
                    </Button>
                </CardActions>
                </Box>
            </Box>
            </Card>
        </Box>
    </Box>
  )
}
