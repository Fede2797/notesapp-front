import { Box, Card, CardActions, CardContent, IconButton, TextareaAutosize } from "@mui/material";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export const NewNote = () => {
  return (
    <Box
        width='100%' 
        justifyContent='center'
        display='flex'
        alignItems='center'
        marginTop='20px'
    >
        <IconButton aria-label='new note' size='small' color='primary'>
            <AddCircleIcon sx={{ fontSize: 55 }} />                        
        </IconButton>

        <Box
            width='500px'
            display='none'
        >
            <Card sx={{ ':hover': { boxShadow: 4 } }}>
            <CardContent style={{ paddingBottom: 0 }}>
                {/* insert title */}
                <TextareaAutosize 
                    placeholder='Title'
                    style={{ width: '100%', fontWeight: 500 }}
                    minRows={1}
                    variant='h5' 
                    component='h2'
                />

                {/* insert description */}
                <TextareaAutosize 
                    placeholder='Add a new note'
                    style={{ width: '100%', fontSize: 14 }}
                    minRows={1}
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
                >
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
        </Box>
    </Box>
  )
}
