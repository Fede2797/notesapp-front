import { useState } from "react";
import { useDispatch } from "react-redux";

import { Alert, Box, Button, Card, CardActions, CardContent, Fab, Grid, TextareaAutosize } from "@mui/material";

import { useForm } from "../../hooks";
import { postNewNote } from "../../store/note";
import AddIcon from '@mui/icons-material/Add';
import { CustomTooltip } from "./CustomTooltip";

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

        <CustomTooltip title="New note" >
        <Fab
            sx={{position: 'fixed', bottom: 35, right: 35,}}
            aria-label='Add' 
            color="primary"
            onClick={ () => setDisplayNewNote( !displayNewNote ) }
        >
            <AddIcon />
        </Fab>
        </CustomTooltip>

        <Box
            // width='500px'
            width={{ xs:'280px', sm:'350px', md:'400px', lg:'500px'}}
            display={ displayNewNote ? '' : 'none' }
        >
            <Card sx={{ ':hover': { boxShadow: 4 } }}
                className={ "animate__animated animate__fadeIn animate__faster" }
                variant="outlined"
            >
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
