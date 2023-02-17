import { loadNotes, loadNotesBySearch, postNote } from "../../helpers/loadNotes";
import { addNote, setIsLoadingNotes, setNotes } from "./noteSlice";

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { stateToDisplay: state } = getState().note;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid, state );
        dispatch( setNotes( notes ) );
        dispatch( setIsLoadingNotes( false ) );
    }
}

export const postNewNote = ( title, description ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;

        const note = {
            title,
            description,
            dateModify: Date.now(),
            uid
        }
        const res = await postNote( note );

        dispatch( addNote( res.note ) );
    }
}

export const getNotesBySearch = ( searchText ) => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { stateToDisplay: state } = getState().note;

        const notes = await loadNotesBySearch( uid, state, searchText );

        dispatch( setNotes( notes ) );
        dispatch( setIsLoadingNotes( false ) );
    }
}
