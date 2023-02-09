import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, InputBase, IconButton, Paper, styled, Button, TextField, TextareaAutosize } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import { Box } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import {notes} from './notes';
// import Masonry from 'react-masonry-css';
import Masonry from '@mui/lab/Masonry';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export const NotesApp = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline enableColorScheme />

            {/* NavBar */}
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <DescriptionIcon sx={{ mr: 1 }} />
                    <Box>
                        <Typography variant='h6' color="inherit" noWrap>
                            NotesApp
                        </Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ pl: 11.5 }}
                        width='100%'
                    >
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' , height: 40 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* SideBar */}
            <Drawer
                    variant="permanent"
                    sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                    }}
                >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {['Notes', 'Archived', 'Trash'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

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
