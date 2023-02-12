import { Typography, Box, Card, CardActions, CardContent, CssBaseline, Grid, Toolbar, Container, IconButton, TextareaAutosize } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import { NavBar, SideBar } from '../components'
import { notes } from '../../notes';

export const NotesPage = () => {

    const drawerSize = 240;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline enableColorScheme />

            <NavBar />

            <SideBar drawerSize={ drawerSize } />

            {/* Main */}
            <Box justifyContent='center' width='100vw'>
                <Toolbar />

                <Box 
                    width='100%' 
                    justifyContent='center'
                    display="flex"
                    alignItems="center"
                    marginTop="20px"
                >
                    {/* <Button variant="text">
                        <AddCircleIcon />
                    </Button> */}
                    <IconButton aria-label="new note" size='small' color='primary'>
                        <AddCircleIcon sx={{ fontSize: 55 }} />                        
                    </IconButton>

                    <Box
                        width="500px"
                    >
                        <Card 
                            // variant='outlined'
                            sx={{ ':hover': { boxShadow: 4 } }}
                        >
                        <CardContent
                            style={{ paddingBottom: 0 }}
                        >
                            {/* insert title */}
                            <TextareaAutosize 
                                placeholder='Title'
                                style={{ width: "100%", fontWeight: 500 }}
                                minRows={1}
                                variant="h5" 
                                component="h2"
                            />

                            {/* insert description */}
                            <TextareaAutosize 
                                placeholder='Add a new note'
                                style={{ width: "100%", fontSize: 14 }}
                                minRows={1}
                            />
                        </CardContent>
                        <Box 
                            justifyContent='space-between'
                            display="flex"
                        >
                            <Box
                                display="flex"
                                flexDirection='column'
                                justifyContent='center'
                            >
                            </Box>
                            <Box>
                            <CardActions>
                                <IconButton size="small" aria-label="delete note" color='warning '>
                                    <ArchiveOutlinedIcon />
                                </IconButton>
                                <IconButton size="small" aria-label="delete note" color='error'>
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>
                            </CardActions>
                            </Box>
                        </Box>
                        </Card>
                    </Box>
                </Box>

                <Container sx={{ py: 3 }} maxWidth="xxl">
                    <Grid container justifyContent='center'>
                    <Masonry
                    className="my-masonry-grid"
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
                                    variant="h5" 
                                    component="h2"  
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
                                display="flex"
                            >
                                <Box
                                    display="flex"
                                    flexDirection='column'
                                    justifyContent='center'
                                    marginLeft='15px'
                                >
                                <Typography 
                                    variant="caption"
                                    color="grey"
                                >{ note.dateModify }</Typography>
                                </Box>
                                <Box>
                                <CardActions>
                                    <IconButton size="small" aria-label="delete note" color='warning '>
                                        <ArchiveOutlinedIcon />
                                    </IconButton>
                                    <IconButton size="small" aria-label="delete note" color='error'>
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
            </Box>
        </Box>
    )
}
