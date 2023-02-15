import { loadNotes, postNote } from "../../helpers/loadNotes";
import { addNote, setNotes } from "./noteSlice";

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { stateToDisplay: state } = getState().note;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid, state );
        dispatch( setNotes( notes ) );
    }
}

export const postNewNote = ( title, description ) => {
    return async ( dispatch, getState ) => {

        console.log("a");
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