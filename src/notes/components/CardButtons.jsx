import { useDispatch, useSelector } from 'react-redux';

import { Box, CardActions, IconButton, Tooltip } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';

import { updateNoteState } from '../../helpers/loadNotes';
import { removeNote } from '../../store/note';
import { CustomTooltip } from './CustomTooltip';

export const CardButtons = ({ note, index }) => {

    const dispatch = useDispatch();
    const { stateToDisplay } = useSelector( state => state.note );

    let icon = <></>;
    let firstButtonState = '';
    let firstButtonTooltip = '';
    let secondButtonState = '';
    let secondButtonTooltip = '';
    let buttonColor = '';

    switch ( stateToDisplay ) {

        case 'ACTIVE':
            icon = <ArchiveOutlinedIcon />;
            firstButtonState = 'ARCHIVED';
            firstButtonTooltip = 'Archive note';
            secondButtonTooltip = 'Delete note';
            secondButtonState = 'DELETED';
            buttonColor = "";
            break;
        case 'ARCHIVED':
            icon = <UnarchiveOutlinedIcon />;
            firstButtonState = 'ACTIVE';
            secondButtonState = 'DELETED';
            firstButtonTooltip = 'Unarchive note';
            secondButtonTooltip = 'Delete note';
            buttonColor = "primary";
            break;
        case 'DELETED':
            icon = <RestoreFromTrashOutlinedIcon />;
            firstButtonState = 'ACTIVE';
            firstButtonTooltip = 'Restore note';
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
            <CustomTooltip title={firstButtonTooltip}>
            <IconButton 
                size='small' 
                aria-label='archive note' 
                onClick={ () => onClickButton( note._id, index, firstButtonState) }
                color={ buttonColor }
            >
                { icon }
            </IconButton>
            </CustomTooltip>
            <CustomTooltip title={secondButtonTooltip}>
            <IconButton 
                size='small' 
                aria-label='delete note' 
                color='error'
                sx={{ display: (stateToDisplay === 'DELETED') ? 'none' : '' }}
                onClick={ () => onClickButton( note._id, index, secondButtonState) }
            >
                <DeleteOutlineOutlinedIcon />
            </IconButton>
            </CustomTooltip>
        </CardActions>
        </Box>
    )
}
