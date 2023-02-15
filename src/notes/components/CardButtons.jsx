import { useDispatch, useSelector } from 'react-redux';

import { Box, CardActions, IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';

import { updateNoteState } from '../../helpers/loadNotes';
import { removeNote } from '../../store/note';
import { green } from '@mui/material/colors';

export const CardButtons = ({ note, index }) => {

    const dispatch = useDispatch();
    const { stateToDisplay } = useSelector( state => state.note );

    let icon = <></>;
    let firstButtonState = '';
    let secondButtonState = '';
    let buttonColor = '';

    switch ( stateToDisplay ) {

        case 'ACTIVE':
            icon = <ArchiveOutlinedIcon />;
            firstButtonState = 'ARCHIVED';
            secondButtonState = 'DELETED';
            buttonColor = "";
            break;
        case 'ARCHIVED':
            icon = <UnarchiveOutlinedIcon />;
            firstButtonState = 'ACTIVE';
            secondButtonState = 'DELETED';
            buttonColor = "primary";
            break;
        case 'DELETED':
            icon = <RestoreFromTrashOutlinedIcon />;
            firstButtonState = 'ACTIVE';
            secondButtonState = '';
            buttonColor = "primary";
            break;
    
        default:
            break;
    }

    const onClickButton = ( _id, index, state ) => {
        updateNoteState({ _id, state });
        dispatch( removeNote({ index }) );
    }

    return (
        <Box>
        <CardActions>
            <IconButton 
                size='small' 
                aria-label='delete note' 
                onClick={ () => onClickButton( note._id, index, firstButtonState) }
                color={ buttonColor }
            >
                { icon }
            </IconButton>
            <IconButton 
                size='small' 
                aria-label='delete note' 
                color='error'
                // display={ (stateToDisplay === 'DELETED') ? 'none' : '' }
                sx={{ display: (stateToDisplay === 'DELETED') ? 'none' : '' }}
                // visibility={ (stateToDisplay === 'DELETED') ? 'hidden' : '' }
                onClick={ () => onClickButton( note._id, index, secondButtonState) }
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>
        </CardActions>
        </Box>
    )
}
