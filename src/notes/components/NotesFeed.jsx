import { Typography, Box, Card, CardActions, CardContent, Grid, Container, IconButton } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';


export const NotesFeed = ({ notes }) => {
  return (
    <Container sx={{ py: 3 }} maxWidth='xxl'>
        <Grid container justifyContent='center'>
        <Masonry
        className='my-masonry-grid'
        columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={2}
        >
            {notes.map((note) => (
            <Grid item key={note._id}>
                <Card 
                    // variant='outlined'
                    sx={{ ':hover': { boxShadow: 4 } }}
                >
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant='h5' 
                        component='h2'  
                        style={{fontSize: 16, fontWeight: 500 }}
                    >
                    {note.title}
                    </Typography>
                    <Typography
                        style={{fontSize: 14 }}
                    >
                    {note.description}
                    </Typography>
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
                    <Box>
                    <CardActions>
                        <IconButton size='small' aria-label='delete note' color='warning '>
                            <ArchiveOutlinedIcon />
                        </IconButton>
                        <IconButton size='small' aria-label='delete note' color='error'>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </CardActions>
                    </Box>
                </Box>
                </Card>
            </Grid>
            ))}

        </Masonry>
        </Grid>
    </Container>
  )
}
